package models

type ServiceAccountCreateRequest struct {
	Email    string `json:"email" validate:"required,email"`
	Username string `json:"username" validate:"required"`
	Role     string `json:"role" validate:"required"`
}

type ServiceAccountPayloadResponse struct {
	PrivateKey string `json:"private_key"`
	PublicKey  string `json:"public_key"`
}

type ServiceAccountCreateResponse struct {
	BaseModel
	Data ServiceAccountPayloadResponse `json:"data"`
}

type ServiceAccountDeleteResponse struct {
	BaseModel
}

type ServiceAccountUpdateRequest struct {
	Email    string `json:"email" validate:"required,email"`
	Username string `json:"username" validate:"required"`
	Role     string `json:"role" validate:"required"`
}

type ServiceAccountUpdateResponse struct {
	BaseModel
}
