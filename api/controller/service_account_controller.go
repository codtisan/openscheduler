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

func ServiceAccountDeleteAPI(c fiber.Ctx) error {
	serviceAccountID := c.Params("account_id")
	if serviceAccountID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Missing required fields",
		})
	}

	response := models.ServiceAccountDeleteResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Service account created successfully",
		},
	}
	return c.Status(200).JSON(response)
}

func ServiceAccountUpdateAPI(c fiber.Ctx) error {
	serviceAccountID := c.Params("account_id")
	if serviceAccountID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Missing required fields",
		})
	}
	var payload models.ServiceAccountUpdateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	err := services.UpdateServiceAccount(serviceAccountID, payload)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	response := models.ServiceAccountUpdateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "User updated successfully",
		},
	}
	return c.Status(200).JSON(response)
}
