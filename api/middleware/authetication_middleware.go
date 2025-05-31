package middleware

import (
	"open-scheduler/pkg/utils"
	"strings"

	"github.com/gofiber/fiber/v3"
)

func autheticationMiddleware(c fiber.Ctx) error {
	authorizationHeader := c.Get(fiber.HeaderAuthorization)
	token := strings.TrimPrefix(authorizationHeader, "Bearer ")
	_, err := utils.ValidateJWT(token)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": err.Error(),
		})
	}
	c.Next()
	return nil
}
