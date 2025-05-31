package controller

import (
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"

	"github.com/gofiber/fiber/v3"
)

func ServiceAccountCreateAPI(c fiber.Ctx) error {
	var payload models.ServiceAccountCreateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	privateKey, publicKey, err := services.CreateServiceAccount(payload)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	response := models.ServiceAccountCreateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Service account created successfully",
		},
		Data: models.ServiceAccountPayloadResponse{
			PrivateKey: privateKey,
			PublicKey:  publicKey,
		},
	}
	return c.Status(200).JSON(response)
}
