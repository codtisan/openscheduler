package models

type RoleCreateRequest struct {
	Name      string   `json:"name"`
	Dashboard []string `json:"dashboard"`
	Log       []string `json:"log"`
	Workflow  []string `json:"workflow"`
	Alert     []string `json:"alert"`
	Task      []string `json:"task"`
}

type RoleCreateResponse struct {
	BaseModel
}
