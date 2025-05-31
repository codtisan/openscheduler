package controller

import (
	"open-scheduler/internal/config"
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/handler"

	"github.com/gofiber/fiber/v3"
)

func ServiceAccountCreateAPI(c fiber.Ctx) error {
	var payload models.ServiceAccountCreateRequest
	err := c.Bind().Body(&payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)
	err = config.Validator.Struct(payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

	privateKey, publicKey, err := services.CreateServiceAccount(payload)
	handler.CheckHTTPError(c, err, fiber.StatusInternalServerError)

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
		handler.SendHTTPError(c, fiber.StatusBadRequest, "Missing required fields")
	}

	response := models.ServiceAccountDeleteResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Service account deleted successfully",
		},
	}
	return c.Status(200).JSON(response)
}

func ServiceAccountUpdateAPI(c fiber.Ctx) error {
	serviceAccountID := c.Params("account_id")
	if serviceAccountID == "" {
		handler.SendHTTPError(c, fiber.StatusBadRequest, "Missing required fields")
	}
	var payload models.ServiceAccountUpdateRequest
	err := c.Bind().Body(&payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)
	err = config.Validator.Struct(payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

	err = services.UpdateServiceAccount(serviceAccountID, payload)
	handler.CheckHTTPError(c, err, fiber.StatusInternalServerError)

	response := models.ServiceAccountUpdateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Service account updated successfully",
		},
	}
	return c.Status(200).JSON(response)
}
