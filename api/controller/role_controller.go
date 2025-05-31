package controller

import (
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/handler"

	"github.com/gofiber/fiber/v3"
)

func RoleCreateAPI(c fiber.Ctx) error {
	var payload models.RoleCreateRequest
	err := c.Bind().Body(&payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

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

func RoleDeleteAPI(c fiber.Ctx) error {
	roleID := c.Params("role_id")
	if roleID == "" {
		handler.SendHTTPError(c, fiber.StatusBadRequest, "Missing required fields")
	}

	services.DeleteRole(roleID)

	response := models.RoleDeleteResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Role deleted successfully",
		},
	}
	return c.Status(200).JSON(response)
}
