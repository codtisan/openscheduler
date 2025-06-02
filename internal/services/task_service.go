package services

import (
	"context"
	"open-scheduler/internal/models"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/v2/bson"
)

func CreateHTTPTask(taskInfo models.CreateHTTPJobRequest) error {
	ctx := context.TODO()
	taskRecord := schema.HTTPTaskSchema{
		TaskID:      uuid.New().String(),
		Status:      "Created",
		Name:        taskInfo.Name,
		Description: taskInfo.Description,
		Target:      taskInfo.Target,
		Interval:    taskInfo.Interval,
		Retry:       taskInfo.Retry,
		Method:      taskInfo.Method,
		Check:       taskInfo.Check,
		Timeout:     taskInfo.Timeout,
		Body:        taskInfo.Body,
		BaseSchema:  databases.DefaultBaseSchema,
	}
	databases.SystemDB.Collection("http_task", nil).InsertOne(ctx, taskRecord, nil)
	return nil
}

func FindHTTPTaskByID(jobID string) (schema.HTTPTaskSchema, error) {
	ctx := context.TODO()
	findFilter := bson.M{
		"task_id": jobID,
	}
	var httpTaskRecord schema.HTTPTaskSchema
	databases.SystemDB.Collection("http_task", nil).FindOne(ctx, findFilter).Decode(&httpTaskRecord)
	return httpTaskRecord, nil
}

func UpdateHTTPTask(jobID string, httpTaskRecord schema.HTTPTaskSchema) error {
	ctx := context.TODO()
	updateFilter := bson.M{
		"_id": httpTaskRecord.ID,
	}
	update := bson.M{
		"$set": bson.M{
			"status":  "Running",
			"task_id": jobID,
		},
	}
	databases.SystemDB.Collection("user", nil).UpdateOne(ctx, updateFilter, update)
	return nil
}
