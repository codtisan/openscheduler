package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
	"open-scheduler/pkg/utils"
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

func CheckUserLogin(userInfo models.UserLoginRequest) (*schema.UserSchema, error) {
	ctx := context.TODO()
	findUserFilter := bson.M{
		"username": userInfo.Username,
	}
	var userRecord schema.UserSchema
	err := databases.SystemDB.Collection("user", nil).FindOne(ctx, findUserFilter).Decode(&userRecord)
	if err != nil {
		return nil, err
	}
	err = utils.CheckPassword(userInfo.Password, userRecord.Password)
	if err != nil {
		return nil, err
	}
	return &userRecord, nil
}

func CreateUser(userInfo models.UserCreateRequest) error {
	ctx := context.TODO()
	hashedPassword, err := utils.HashPassword(userInfo.Password)
	if err != nil {
		return err
	}
	userRecord := schema.UserSchema{
		Username: userInfo.Username,
		Email:    userInfo.Email,
		Password: hashedPassword,
		BaseSchema: schema.BaseSchema{
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
			ID:        bson.NewObjectID(),
		},
	}
	databases.SystemDB.Collection("user", nil).InsertOne(ctx, userRecord, nil)
	return nil
}

func DeleteUser(userID string) error {
	ctx := context.TODO()
	objectID, err := bson.ObjectIDFromHex(userID)
	if err != nil {
		return err
	}
	deleteFilter := bson.M{
		"_id": objectID,
	}
	databases.SystemDB.Collection("user", nil).DeleteOne(ctx, deleteFilter, nil)
	return nil
}
