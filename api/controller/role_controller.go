package controller

import (
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"

	"github.com/gofiber/fiber/v3"
)

func RoleCreateAPI(c fiber.Ctx) error {
	var payload models.RoleCreateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	services.CreateRole(payload)

	response := models.RoleCreateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Role created successfully",
		},
	}
	return c.Status(200).JSON(response)
}
