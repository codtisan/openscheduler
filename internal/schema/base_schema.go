package schema

import (
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type BaseSchema struct {
	ID        bson.ObjectID `bson:"_id"`
	CreatedAt time.Time     `bson:"created_at"`
	UpdatedAt time.Time     `bson:"updated_at"`
}

type LogBaseSchema struct {
	ID        bson.ObjectID `bson:"_id"`
	CreatedAt time.Time     `bson:"created_at"`
}
