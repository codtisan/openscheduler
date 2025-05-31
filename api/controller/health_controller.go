package controller

import (
	"context"
	"open-scheduler/pkg/databases"
	"open-scheduler/pkg/handler"

	"github.com/gofiber/fiber/v3"
)

func HealthCheckAPI(c fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"status":  200,
		"message": "OK!",
	})
}

func HealthCheckDBAPI(c fiber.Ctx) error {
	ctx := context.TODO()
	if err := databases.MongoClient.Ping(ctx, nil); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
	}
	return c.JSON(fiber.Map{
		"status":  200,
		"message": "OK!",
	})
}
