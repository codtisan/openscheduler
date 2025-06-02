package models

type CreateHTTPJobRequest struct {
	Name        string         `json:"name" validate:"required"`
	Description string         `json:"description" validate:"required"`
	Target      string         `json:"target" validate:"required"`
	Interval    int            `json:"interval" validate:"required"`
	Retry       int            `json:"retry" validate:"required"`
	Method      string         `json:"method" validate:"required"`
	Check       int            `json:"check" validate:"required"`
	Timeout     int            `json:"timeout" validate:"required"`
	Body        map[string]any `json:"body"`
}

type CreateHTTPJobResponse struct {
	BaseModel
}
