package databases

import (
	"context"
	"open-scheduler/internal/config"
	"open-scheduler/internal/schema"
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

var (
	MongoClient *mongo.Client
	SystemDB    *mongo.Database
	LogDB       *mongo.Database
	ctx         = context.TODO()
)

var DefaultBaseSchema = schema.BaseSchema{
	ID:        bson.NewObjectID(),
	CreatedAt: time.Now(),
	UpdatedAt: time.Now(),
}

var DefaultLogBaseSchema = schema.LogBaseSchema{
	ID:        bson.NewObjectID(),
	CreatedAt: time.Now(),
}

func InitMongo() {
	client, _ := mongo.Connect(options.Client().ApplyURI(config.SystemConfig.Mongo.URI))
	err := client.Ping(ctx, nil)
	if err != nil {
		panic(err)
	}
	MongoClient = client
	SystemDB = client.Database("system", nil)
	LogDB = client.Database("logs", nil)
}
