package services

import (
	"context"
	"fmt"
	"log"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

func CreateProject(projectInfo models.ProjectCreateRequest) error {
	ctx := context.TODO()
	projectRecord := schema.ProjectSchema{
		Name:        projectInfo.Name,
		Description: projectInfo.Description,
		BaseSchema:  databases.CreateDefaultBaseSchema(),
	}
	fmt.Println(projectRecord)
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

func UpdateProject(projectID string, newProjectInfo models.ProjectUpdateRequest) error {
	ctx := context.TODO()
	objectID, err := bson.ObjectIDFromHex(projectID)
	if err != nil {
		return err
	}
	updateFilter := bson.M{
		"_id": objectID,
	}
	update := bson.M{
		"$set": bson.M{
			"name":        newProjectInfo.Name,
			"description": newProjectInfo.Description,
		},
	}
	databases.SystemDB.Collection("user", nil).UpdateOne(ctx, updateFilter, update)
	return nil
}

func GetProjectList(limit int64, skip int64) ([]schema.ProjectSchema, error) {
	ctx := context.TODO()
	var allRecords []schema.ProjectSchema

	options := options.Find()
	options.SetLimit(limit)
	options.SetSkip(skip)

	cur, err := databases.SystemDB.Collection("project", nil).Find(ctx, bson.M{}, options)
	if err != nil {
		return nil, err
	}
	for cur.Next(context.TODO()) {
		var record schema.ProjectSchema
		err := cur.Decode(&record)
		if err != nil {
			log.Fatal(err)
		}
		allRecords = append(allRecords, record)
	}
	return allRecords, nil
}
