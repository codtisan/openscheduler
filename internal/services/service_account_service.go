package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
	"open-scheduler/pkg/utils"
)

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
		BaseSchema: databases.DefaultBaseSchema,
	}
	databases.SystemDB.Collection("service_account", nil).InsertOne(ctx, serviceAccountRecord, nil)
	return privateKey, publicKey, nil
}
