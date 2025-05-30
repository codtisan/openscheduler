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

func CreateServiceAccount(serviceAccountInfo models.ServiceAccountCreateRequest) (string, string, error) {
	ctx := context.TODO()
	privateKey, publicKey, err := utils.GenerateRSAKeyPair()
	if err != nil {
		return "", "", err
	}
	serviceAccountRecord := schema.ServiceAccountSchema{
		Username:   serviceAccountInfo.Username,
		Email:      serviceAccountInfo.Email,
		PrivateKey: privateKey,
		PublicKey:  publicKey,
		BaseSchema: schema.BaseSchema{
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
			ID:        bson.NewObjectID(),
		},
	}
	databases.SystemDB.Collection("service_account", nil).InsertOne(ctx, serviceAccountRecord, nil)
	return privateKey, publicKey, nil
}

func CreateRole(roleInfo models.RoleCreateRequest) error {
	ctx := context.TODO()
	roleRecord := schema.RoleSchema{
		Name:      roleInfo.Name,
		Dashboard: roleInfo.Dashboard,
		Log:       roleInfo.Log,
		Alert:     roleInfo.Alert,
		Workflow:  roleInfo.Workflow,
		Task:      roleInfo.Task,
		BaseSchema: schema.BaseSchema{
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
			ID:        bson.NewObjectID(),
		},
	}
	databases.SystemDB.Collection("role", nil).InsertOne(ctx, roleRecord, nil)
	return nil
}
