package databases

import (
	"context"

	"github.com/gofiber/fiber/v2/log"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

var (
	MongoClient *mongo.Client
	SystemDB    *mongo.Database
	LogDB       *mongo.Database
	ctx         = context.TODO()
)

func Init() {
	client, _ := mongo.Connect(options.Client().ApplyURI("mongodb://localhost:27017"))
	err := client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}
	MongoClient = client
	SystemDB = client.Database("system", nil)
	LogDB = client.Database("logs", nil)
}
