package controller

import (
	"open-scheduler/internal/models"

	"github.com/gofiber/fiber/v3"
)

func UserLoginAPI(c fiber.Ctx) error {
	var payload models.UserLoginRequest
	if err := c.Bind().Body(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return c.Status(200).JSON(fiber.Map{
		"status":  200,
		"message": "OK!",
		"data":    payload,
	})
}
