package controller

import (
	"errors"
	"open-scheduler/internal/config"
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/handler"

	"github.com/gofiber/fiber/v3"
)

func ServiceAccountCreateAPI(c fiber.Ctx) error {
	var payload models.ServiceAccountCreateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}
	if err := config.Validator.Struct(payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	privateKey, publicKey, err := services.CreateServiceAccount(payload)
	if err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
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
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
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
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}
	var payload models.ServiceAccountUpdateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}
	if err := config.Validator.Struct(payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	if err := services.UpdateServiceAccount(serviceAccountID, payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
	}

	response := models.ServiceAccountUpdateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Service account updated successfully",
		},
	}
	return c.Status(200).JSON(response)
}
