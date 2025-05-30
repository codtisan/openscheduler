package models

type BaseModel struct {
	Status     string `json:"status"`
	StatusCode int32  `json:"status_code"`
	Message    string `json:"message"`
}
