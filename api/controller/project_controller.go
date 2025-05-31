package controller

import (
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"

	"github.com/gofiber/fiber/v3"
)

func ProjectCreateAPI(c fiber.Ctx) error {
	var payload models.ProjectCreateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

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
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Missing required fields",
		})
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
