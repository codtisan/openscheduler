package controller

import (
	"context"
	"open-scheduler/pkg/databases"

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
	err := databases.MongoClient.Ping(ctx, nil)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.JSON(fiber.Map{
		"status":  200,
		"message": "OK!",
	})
}
