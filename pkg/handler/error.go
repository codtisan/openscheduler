package handler

import (
	"open-scheduler/pkg/logger"

	"github.com/gofiber/fiber/v3"
)

func SendHTTPError(c fiber.Ctx, err error, statusCode int) error {
	logger.Error(err, "")
	return c.Status(statusCode).JSON(fiber.Map{
		"error": err.Error(),
	})
}
