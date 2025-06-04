package services

import (
	"context"
	"log"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

func CreateRole(roleInfo models.RoleCreateRequest) error {
	ctx := context.TODO()
	roleRecord := schema.RoleSchema{
		Name:       roleInfo.Name,
		Dashboard:  roleInfo.Dashboard,
		Log:        roleInfo.Log,
		Alert:      roleInfo.Alert,
		Workflow:   roleInfo.Workflow,
		Task:       roleInfo.Task,
		BaseSchema: databases.CreateDefaultBaseSchema(),
	}
	databases.SystemDB.Collection("role", nil).InsertOne(ctx, roleRecord, nil)
	return nil
}

func DeleteRole(roleID string) error {
	ctx := context.TODO()
	objectID, err := bson.ObjectIDFromHex(roleID)
	if err != nil {
		return err
	}
	deleteFilter := bson.M{
		"_id": objectID,
	}
	databases.SystemDB.Collection("role", nil).DeleteOne(ctx, deleteFilter, nil)
	return nil
}

func UpdateRole(roleID string, newRoleInfo models.RoleUpdateRequest) error {
	ctx := context.TODO()
	objectID, err := bson.ObjectIDFromHex(roleID)
	if err != nil {
		return err
	}
	updateFilter := bson.M{
		"_id": objectID,
	}
	update := bson.M{
		"$set": bson.M{
			"name":      newRoleInfo.Name,
			"dashboard": newRoleInfo.Dashboard,
			"alert":     newRoleInfo.Alert,
			"log":       newRoleInfo.Log,
			"workflow":  newRoleInfo.Workflow,
			"task":      newRoleInfo.Task,
		},
	}
	databases.SystemDB.Collection("role", nil).UpdateOne(ctx, updateFilter, update)
	return nil
}

func GetRoleList(limit int64, skip int64) ([]schema.RoleSchema, error) {
	ctx := context.TODO()
	var allRecords []schema.RoleSchema

	options := options.Find()
	options.SetLimit(limit)
	options.SetSkip(skip)

	cur, err := databases.SystemDB.Collection("role", nil).Find(ctx, bson.M{}, options)
	if err != nil {
		return nil, err
	}
	for cur.Next(context.TODO()) {
		var record schema.RoleSchema
		err := cur.Decode(&record)
		if err != nil {
			log.Fatal(err)
		}
		allRecords = append(allRecords, record)
	}
	return allRecords, nil
}
