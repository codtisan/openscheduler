package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
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
