package models

type UserLoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type UserLoginPayloadResponse struct {
	AccessToken string `json:"access_token"`
}

type UserLoginResponse struct {
	BaseModel
	Data UserLoginPayloadResponse `json:"data"`
}

type UserCreateRequest struct {
	Email    string `json:"email"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type UserCreateResponse struct {
	BaseModel
}

type ServiceAccountCreateRequest struct {
	Email    string `json:"email"`
	Username string `json:"username"`
	Role     string `json:"role"`
}

type ServiceAccountPayloadResponse struct {
	PrivateKey string `json:"private_key"`
	PublicKey  string `json:"public_key"`
}

type ServiceAccountCreateResponse struct {
	BaseModel
	Data ServiceAccountPayloadResponse `json:"data"`
}

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
