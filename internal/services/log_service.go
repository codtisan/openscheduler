package services

import (
	"context"
	"log"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

func GetAuditLogList(limit int64, skip int64) ([]schema.AuditLogSchema, error) {
	ctx := context.TODO()
	allRecords := []schema.AuditLogSchema{}

	options := options.Find()
	options.SetLimit(limit)
	options.SetSkip(skip)

	cur, err := databases.LogDB.Collection("audit_log", nil).Find(ctx, bson.M{}, options)
	if err != nil {
		return nil, err
	}
	for cur.Next(context.TODO()) {
		var record schema.AuditLogSchema
		err := cur.Decode(&record)
		if err != nil {
			log.Fatal(err)
		}
		allRecords = append(allRecords, record)
	}
	return allRecords, nil
}

func GetMetricsLogList(limit int64, skip int64) ([]schema.MetricsLogSchema, error) {
	ctx := context.TODO()
	allRecords := []schema.MetricsLogSchema{}

	options := options.Find()
	options.SetLimit(limit)
	options.SetSkip(skip)

	cur, err := databases.LogDB.Collection("metrics_log", nil).Find(ctx, bson.M{}, options)
	if err != nil {
		return nil, err
	}
	for cur.Next(context.TODO()) {
		var record schema.MetricsLogSchema
		err := cur.Decode(&record)
		if err != nil {
			log.Fatal(err)
		}
		allRecords = append(allRecords, record)
	}
	return allRecords, nil
}

func GetResponseLogList(limit int64, skip int64) ([]schema.ResponseLogSchema, error) {
	ctx := context.TODO()
	allRecords := []schema.ResponseLogSchema{}

	options := options.Find()
	options.SetLimit(limit)
	options.SetSkip(skip)

	cur, err := databases.LogDB.Collection("response_log", nil).Find(ctx, bson.M{}, options)
	if err != nil {
		return nil, err
	}
	for cur.Next(context.TODO()) {
		var record schema.ResponseLogSchema
		err := cur.Decode(&record)
		if err != nil {
			log.Fatal(err)
		}
		allRecords = append(allRecords, record)
	}
	return allRecords, nil
}
