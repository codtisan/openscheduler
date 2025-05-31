package controller

import (
	"errors"
	"open-scheduler/internal/config"
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/handler"
	"open-scheduler/pkg/utils"

	"github.com/gofiber/fiber/v3"
)

func UserLoginAPI(c fiber.Ctx) error {
	var payload models.UserLoginRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	if err := config.Validator.Struct(payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	userRecord, err := services.CheckUserLogin(payload)
	if err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
	}
	jwtToken, err := utils.GenerateJWT(userRecord.Username, userRecord.ID)
	if err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
	}

	response := models.UserLoginResponse{
		Data: models.UserLoginPayloadResponse{
			AccessToken: jwtToken,
		},
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "User login successfully",
		},
	}
	return c.Status(200).JSON(response)
}

func UserCreateAPI(c fiber.Ctx) error {
	var payload models.UserCreateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	if err := config.Validator.Struct(payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	if err := services.CreateUser(payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)

	}

	response := models.UserCreateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "User created successfully",
		},
	}
	return c.Status(200).JSON(response)
}

func UserDeleteAPI(c fiber.Ctx) error {
	userID := c.Params("user_id")
	if userID == "" {
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}

	if err := services.DeleteUser(userID); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
	}

	services.DeleteUser(userID)
	response := models.UserDeleteResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "User deleted successfully",
		},
	}
	return c.Status(200).JSON(response)
}

func UserUpdateAPI(c fiber.Ctx) error {
	userID := c.Params("user_id")
	if userID == "" {
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}
	var payload models.UserUpdateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	if err := config.Validator.Struct(payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	if err := services.UpdateUser(userID, payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
	}

	response := models.UserUpdateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "User updated successfully",
		},
	}
	return c.Status(200).JSON(response)
}
