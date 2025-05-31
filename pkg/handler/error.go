package handler

import "github.com/gofiber/fiber/v3"

func SendHTTPError(c fiber.Ctx, err error, statusCode int) error {
	return c.Status(statusCode).JSON(fiber.Map{
		"error": err.Error(),
	})
}
