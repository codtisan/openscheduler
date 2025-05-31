package middleware

import (
	"context"
	"encoding/json"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
	"strings"
	"time"

	"github.com/gofiber/fiber/v3"
	"go.mongodb.org/mongo-driver/v2/bson"
)

func auditlogMiddleware(c fiber.Ctx) error {
	startTime := time.Now()
	var requestBody map[string]any
	ctx := context.TODO()
	body := c.Body()
	if len(body) > 0 {
		if err := json.Unmarshal(body, &requestBody); err != nil {
			requestBody = make(map[string]any)
		}
	} else {
		requestBody = make(map[string]any)
	}
	resource := strings.Split(strings.TrimPrefix(c.Path(), "/"), "/")
	auditlogID := bson.NewObjectID()
	auditlog := schema.AuditLogSchema{
		UserID:      "asdda",
		UserAgent:   c.Get("User-Agent"),
		IP:          c.IP(),
		Route:       c.Path(),
		Resource:    resource[0],
		RequestBody: requestBody,
		Method:      c.Method(),
		BaseSchema:  databases.DefaultBaseSchema,
	}
	databases.LogDB.Collection("audit_log").InsertOne(ctx, auditlog)
	err := c.Next()

	var responseBody map[string]any
	if len(c.Response().Body()) > 0 {
		if err := json.Unmarshal(c.Response().Body(), &responseBody); err != nil {
			responseBody = make(map[string]any)
		}
	} else {
		responseBody = make(map[string]any)
	}
	responselog := schema.ResponseLogSchema{
		AuditlogID: auditlogID,
		Resource:   resource[0],
		Route:      c.Path(),
		Method:     c.Method(),
		Latency:    int32(time.Since(startTime)),
		Payload:    responseBody,
		BaseSchema: databases.DefaultBaseSchema,
	}
	databases.LogDB.Collection("response_log").InsertOne(ctx, responselog)
	return err
}
