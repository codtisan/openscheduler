package models

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
