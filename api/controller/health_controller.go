package controller

import "github.com/gofiber/fiber/v3"

func HealthCheckAPI(c fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"status":  200,
		"message": "OK!",
	})
}
