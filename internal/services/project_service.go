package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

func CreateProject(projectInfo models.ProjectCreateRequest) error {
	ctx := context.TODO()
	projectRecord := schema.ProjectSchema{
		Name:        projectInfo.Name,
		Description: projectInfo.Description,
		BaseSchema: schema.BaseSchema{
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
			ID:        bson.NewObjectID(),
		},
	}
	databases.SystemDB.Collection("project", nil).InsertOne(ctx, projectRecord, nil)
	return nil
}
