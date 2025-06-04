package models

import "open-scheduler/internal/schema"

type RoleCreateRequest struct {
	Name      string   `json:"name" validate:"required"`
	Dashboard []string `json:"dashboard" validate:"required"`
	Log       []string `json:"log" validate:"required"`
	Workflow  []string `json:"workflow" validate:"required"`
	Alert     []string `json:"alert" validate:"required"`
	Task      []string `json:"task" validate:"required"`
}

type RoleCreateResponse struct {
	BaseModel
}

type RoleDeleteResponse struct {
	BaseModel
}

type GetRoleListResponse struct {
	BaseModel
	Data []schema.RoleSchema `json:"data"`
}
