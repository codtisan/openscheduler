package models

import "open-scheduler/internal/schema"

type GetAuditLogListResponse struct {
	BaseModel
	Data []schema.AuditLogSchema `json:"data"`
}

type GetMetricsLogListResponse struct {
	BaseModel
	Data []schema.MetricsLogSchema `json:"data"`
}

type GetResponseLogListResponse struct {
	BaseModel
	Data []schema.ResponseLogSchema `json:"data"`
}
