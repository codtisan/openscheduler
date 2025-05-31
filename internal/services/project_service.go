package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"

	"go.mongodb.org/mongo-driver/v2/bson"
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

func DeleteProject(projectID string) error {
	ctx := context.TODO()
	objectID, err := bson.ObjectIDFromHex(projectID)
	if err != nil {
		return err
	}
	deleteFilter := bson.M{
		"_id": objectID,
	}
	databases.SystemDB.Collection("project", nil).DeleteOne(ctx, deleteFilter, nil)
	return nil
}
