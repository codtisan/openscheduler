package models

import "open-scheduler/internal/schema"

type ProjectCreateRequest struct {
	Name        string `json:"name" validate:"required"`
	Description string `json:"description" validate:"required"`
}

type ProjectCreateResponse struct {
	BaseModel
}

type ProjectDeleteResponse struct {
	BaseModel
}

type ProjectUpdateRequest struct {
	Name        string `json:"name" validate:"required"`
	Description string `json:"description" validate:"required"`
}

type ProjectUpdateResponse struct {
	BaseModel
}

type ProjectListPayloadResponse struct {
}

type GetProjectListResponse struct {
	BaseModel
	Data []schema.ProjectSchema `json:"data"`
}
