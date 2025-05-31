package models

type ProjectCreateRequest struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

type ProjectCreateResponse struct {
	BaseModel
}

type ProjectDeleteResponse struct {
	BaseModel
}
