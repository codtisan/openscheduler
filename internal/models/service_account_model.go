package models

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

type ServiceAccountDeleteResponse struct {
	BaseModel
}

type ServiceAccountUpdateRequest struct {
	Email    string `json:"email"`
	Username string `json:"username"`
	Role     string `json:"role"`
}

type ServiceAccountUpdateResponse struct {
	BaseModel
}
