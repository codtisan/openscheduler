package handler

import "github.com/gofiber/fiber/v3"

func CheckHTTPError(c fiber.Ctx, err error, statusCode int) error {
	if err != nil {
		return c.Status(statusCode).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	return nil
}

func SendHTTPError(c fiber.Ctx, statusCode int, message string) error {
	return c.Status(statusCode).JSON(fiber.Map{
		"error": message,
	})
}
