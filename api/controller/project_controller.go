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

func ProjectCreateAPI(c fiber.Ctx) error {
	var payload models.ProjectCreateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}
	if err := config.Validator.Struct(payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
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
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
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
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}
	var payload models.ProjectUpdateRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}
	if err := config.Validator.Struct(payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	if err := services.UpdateProject(projectID, payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
	}

	response := models.ProjectUpdateResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Project updated successfully",
		},
	}
	return c.Status(200).JSON(response)
}

func GetProjectListAPI(c fiber.Ctx) error {
	limitQuery := c.Query("limit")
	skipQuery := c.Query("skip")
	limit, err := strconv.ParseInt(limitQuery, 10, 64)
	skip, err := strconv.ParseInt(skipQuery, 10, 64)
	if err != nil {
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}

	allRecords, err := services.GetProjectList(limit, skip)

	response := models.GetProjectListResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Project updated successfully",
		},
		Data: allRecords,
	}
	return c.Status(200).JSON(response)
}
