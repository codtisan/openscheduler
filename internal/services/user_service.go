package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
	"open-scheduler/pkg/utils"

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
