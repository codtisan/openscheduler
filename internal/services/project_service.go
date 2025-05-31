package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
)

func CreateProject(projectInfo models.ProjectCreateRequest) error {
	ctx := context.TODO()
	projectRecord := schema.ProjectSchema{
		Name:        projectInfo.Name,
		Description: projectInfo.Description,
		BaseSchema:  databases.DefaultBaseSchema,
	}
	databases.SystemDB.Collection("project", nil).InsertOne(ctx, projectRecord, nil)
	return nil
}
