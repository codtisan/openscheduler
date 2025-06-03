package models

import "open-scheduler/internal/schema"

type GetAuditLogListResponse struct {
	BaseModel
	Data []schema.AuditLogSchema `json:"data"`
}
