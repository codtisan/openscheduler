package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"

	"go.mongodb.org/mongo-driver/v2/bson"
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
		BaseSchema: databases.DefaultBaseSchema,
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
