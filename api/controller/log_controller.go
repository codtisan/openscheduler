package controller

import (
	"errors"
	"open-scheduler/internal/models"
	"open-scheduler/internal/services"
	"open-scheduler/pkg/handler"
	"strconv"

	"github.com/gofiber/fiber/v3"
)

func GetAuditLogListAPI(c fiber.Ctx) error {
	limitQuery := c.Query("limit")
	skipQuery := c.Query("skip")
	limit, err := strconv.ParseInt(limitQuery, 10, 64)
	skip, err := strconv.ParseInt(skipQuery, 10, 64)
	if err != nil {
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}

	allRecords, err := services.GetAuditLogList(limit, skip)

	response := models.GetAuditLogListResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Get auditlog successfully",
		},
		Data: allRecords,
	}
	return c.Status(200).JSON(response)
}

func GetMetricsLogListAPI(c fiber.Ctx) error {
	limitQuery := c.Query("limit")
	skipQuery := c.Query("skip")
	limit, err := strconv.ParseInt(limitQuery, 10, 64)
	skip, err := strconv.ParseInt(skipQuery, 10, 64)
	if err != nil {
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}

	allRecords, err := services.GetMetricsLogList(limit, skip)

	response := models.GetMetricsLogListResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Get metricslog successfully",
		},
		Data: allRecords,
	}
	return c.Status(200).JSON(response)
}

func GetResponseLogListAPI(c fiber.Ctx) error {
	limitQuery := c.Query("limit")
	skipQuery := c.Query("skip")
	limit, err := strconv.ParseInt(limitQuery, 10, 64)
	skip, err := strconv.ParseInt(skipQuery, 10, 64)
	if err != nil {
		return handler.SendHTTPError(c, errors.New("Missing required fields"), fiber.StatusBadRequest)
	}

	allRecords, err := services.GetResponseLogList(limit, skip)

	response := models.GetResponseLogListResponse{
		BaseModel: models.BaseModel{
			Status:     "success",
			StatusCode: 200,
			Message:    "Get response log successfully",
		},
		Data: allRecords,
	}
	return c.Status(200).JSON(response)
}
