package controller

import (
	"errors"
	"open-scheduler/internal/config"
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/handler"
	"strconv"

	"github.com/gofiber/fiber/v3"
)

func RoleCreateAPI(c fiber.Ctx) error {
	var payload models.RoleCreateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}
	if err := config.Validator.Struct(payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
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

func RoleDeleteAPI(c fiber.Ctx) error {
	roleID := c.Params("role_id")
	if roleID == "" {
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
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

func GetRoleListAPI(c fiber.Ctx) error {
	limitQuery := c.Query("limit")
	skipQuery := c.Query("skip")
	limit, err := strconv.ParseInt(limitQuery, 10, 64)
	skip, err := strconv.ParseInt(skipQuery, 10, 64)
	if err != nil {
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}

	allRecords, err := services.GetRoleList(limit, skip)

	response := models.GetRoleListResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Get role list successfully",
		},
		Data: allRecords,
	}
	return c.Status(200).JSON(response)
}
