package controller

import (
	"open-scheduler/internal/config"
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/handler"

	"github.com/gofiber/fiber/v3"
)

func ProjectCreateAPI(c fiber.Ctx) error {
	var payload models.ProjectCreateRequest
	err := c.Bind().Body(&payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)
	err = config.Validator.Struct(payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)
	services.CreateProject(payload)

	response := models.ProjectCreateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Project created successfully",
		},
	}
	return c.Status(200).JSON(response)
}

func ProjectDeleteAPI(c fiber.Ctx) error {
	projectID := c.Params("project_id")
	if projectID == "" {
		handler.SendHTTPError(c, fiber.StatusBadRequest, "Missing required fields")
	}

	services.DeleteProject(projectID)

	response := models.ProjectDeleteResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Project deleted successfully",
		},
	}
	return c.Status(200).JSON(response)
}

func ProjectUpdateAPI(c fiber.Ctx) error {
	projectID := c.Params("project_id")
	if projectID == "" {
		handler.SendHTTPError(c, fiber.StatusBadRequest, "Missing required fields")
	}
	var payload models.ProjectUpdateRequest
	err := c.Bind().Body(&payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)
	err = config.Validator.Struct(payload)
	handler.CheckHTTPError(c, err, fiber.StatusBadRequest)

	err = services.UpdateUser(userID, payload)
	handler.CheckHTTPError(c, err, fiber.StatusInternalServerError)

	response := models.ProjectUpdateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Project updated successfully",
		},
	}
	return c.Status(200).JSON(response)
}
