package controller

import (
	"bytes"
	"encoding/json"
	"errors"
	"open-scheduler/internal/models"
	"open-scheduler/internal/scheduler"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/handler"

	"github.com/gofiber/fiber/v3"
)

func CreateHTTPJobAPI(c fiber.Ctx) error {
	var payload models.CreateHTTPJobRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	services.CreateHTTPTask(payload)

	response := models.CreateHTTPJobResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "HTTP job created successfully",
		},
	}
	return c.Status(200).JSON(response)
}

func RunHTTPJobAPI(c fiber.Ctx) error {
	taskID := c.Params("task_id")
	if taskID == "" {
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}
	var payload models.CreateHTTPJobRequest
	if err := c.Bind().Body(&payload); err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusBadRequest)
	}

	buffer := new(bytes.Buffer)
	json.NewEncoder(buffer).Encode(payload.Body)
	jobID, err := scheduler.AddHTTPJob(payload.Interval, payload.Target, payload.Retry, payload.Timeout, payload.Method, payload.Check, buffer)
	if err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
	}

	httpTaskRecord, err := services.FindHTTPTaskByID(taskID)
	if err != nil {
		return handler.SendHTTPError(c, err, fiber.StatusInternalServerError)
	}
	services.UpdateHTTPTask(jobID.String(), httpTaskRecord)

	response := models.CreateHTTPJobResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "HTTP job running successfully",
		},
	}
	return c.Status(200).JSON(response)
}
