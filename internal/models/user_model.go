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

type UserDeleteResponse struct {
	BaseModel
}
