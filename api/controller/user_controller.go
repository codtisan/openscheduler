package controller

import (
	"log"
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/utils"

	"github.com/gofiber/fiber/v3"
)

func UserLoginAPI(c fiber.Ctx) error {
	var payload models.UserLoginRequest
	if err := c.Bind().Body(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	userRecord, err := services.CheckUserLogin(payload)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	jwtToken, err := utils.GenerateJWT(userRecord.Username, userRecord.ID)
	if err != nil {
		log.Fatal("Failed to generate token")
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
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	err := services.CreateUser(payload)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
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
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Missing required fields",
		})
	}

	err := services.DeleteUser(userID)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
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
