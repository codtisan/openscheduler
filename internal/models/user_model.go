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
