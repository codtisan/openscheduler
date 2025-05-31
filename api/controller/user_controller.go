package controller

import (
	"open-scheduler/internal/config"
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/handler"
	"open-scheduler/pkg/utils"

	"github.com/gofiber/fiber/v3"
)

func UserLoginAPI(c fiber.Ctx) error {
	var payload models.UserLoginRequest
	err := c.Bind().Body(&payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

	err = config.Validator.Struct(payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

	userRecord, err := services.CheckUserLogin(payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

	jwtToken, err := utils.GenerateJWT(userRecord.Username, userRecord.ID)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

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
	err := c.Bind().Body(&payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

	err = config.Validator.Struct(payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

	err = services.CreateUser(payload)
	handler.CheckHTTPError(c, err, fiber.StatusInternalServerError)

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
		handler.SendHTTPError(c, fiber.StatusBadRequest, "Missing required fields")
	}

	err := services.DeleteUser(userID)
	handler.CheckHTTPError(c, err, fiber.StatusInternalServerError)

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
		handler.SendHTTPError(c, fiber.StatusBadRequest, "Missing required fields")
	}
	var payload models.UserUpdateRequest
	err := c.Bind().Body(&payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)
	err = config.Validator.Struct(payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

	err = services.UpdateUser(userID, payload)
	handler.CheckHTTPError(c, err, fiber.StatusInternalServerError)

	response := models.UserUpdateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "User updated successfully",
		},
	}
	return c.Status(200).JSON(response)
}
