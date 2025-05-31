package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

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
