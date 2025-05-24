package controller

import (
	"open-scheduler/internal/models"
	"time"

	"github.com/gofiber/fiber/v3"
)

func UserLoginAPI(c fiber.Ctx) error {
	var payload models.UserLoginRequest
	if err := c.Bind().Body(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	response := models.UserLoginResponse{
		BaseModel: models.BaseModel{
			Status:    200,
			Message:   "User login successfully",
			Timestamp: time.Now(),
		},
		Data: models.UserLoginPayloadResponse{
			AccessToken: "asadsdasasddasadasdasdas",
		},
	}
	return c.Status(200).JSON(response)
}
