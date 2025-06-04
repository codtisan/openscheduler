package services

import (
	"context"
	"log"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
	"open-scheduler/pkg/utils"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
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
		BaseSchema: databases.CreateDefaultBaseSchema(),
	}
	databases.SystemDB.Collection("service_account", nil).InsertOne(ctx, serviceAccountRecord, nil)
	return privateKey, publicKey, nil
}

func DeleteServiceAccount(serviceAccountID string) error {
	ctx := context.TODO()
	objectID, err := bson.ObjectIDFromHex(serviceAccountID)
	if err != nil {
		return err
	}
	deleteFilter := bson.M{
		"_id": objectID,
	}
	databases.SystemDB.Collection("service_account", nil).DeleteOne(ctx, deleteFilter, nil)
	return nil
}

func UpdateServiceAccount(serviceAccountID string, newServiceAccountInfo models.ServiceAccountUpdateRequest) error {
	ctx := context.TODO()
	objectID, err := bson.ObjectIDFromHex(serviceAccountID)
	if err != nil {
		return err
	}
	updateFilter := bson.M{
		"_id": objectID,
	}
	update := bson.M{
		"$set": bson.M{
			"email":    newServiceAccountInfo.Email,
			"username": newServiceAccountInfo.Username,
			"role":     newServiceAccountInfo.Role,
		},
	}
	databases.SystemDB.Collection("user", nil).UpdateOne(ctx, updateFilter, update)
	return nil
}

func GetServiceAccountList(limit int64, skip int64) ([]schema.ServiceAccountSchema, error) {
	ctx := context.TODO()
	var allRecords []schema.ServiceAccountSchema

	options := options.Find()
	options.SetLimit(limit)
	options.SetSkip(skip)

	cur, err := databases.SystemDB.Collection("service_account", nil).Find(ctx, bson.M{}, options)
	if err != nil {
		return nil, err
	}
	for cur.Next(context.TODO()) {
		var record schema.ServiceAccountSchema
		err := cur.Decode(&record)
		if err != nil {
			log.Fatal(err)
		}
		allRecords = append(allRecords, record)
	}
	return allRecords, nil
}
