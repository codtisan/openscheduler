package schema

import (
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type BaseSchema struct {
	ID        bson.ObjectID `json:"id" bson:"_id"`
	CreatedAt time.Time     `json:"createdAt" bson:"created_at"`
	UpdatedAt time.Time     `json:"updatedAt" bson:"updated_at"`
}

type LogBaseSchema struct {
	ID        bson.ObjectID `json:"id" bson:"_id"`
	CreatedAt time.Time     `json:"createdAt" bson:"created_at"`
}
