package models

import "open-scheduler/internal/schema"

type UserLoginRequest struct {
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required,min=8"`
}

type UserLoginPayloadResponse struct {
	AccessToken string `json:"access_token"`
}

type UserLoginResponse struct {
	BaseModel
	Data UserLoginPayloadResponse `json:"data"`
}

type UserCreateRequest struct {
	Email    string `json:"email" validate:"required,email"`
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required,min=8"`
	Role     string `json:"role" validate:"required"`
}

type UserCreateResponse struct {
	BaseModel
}

type UserDeleteResponse struct {
	BaseModel
}

type UserUpdateRequest struct {
	Email    string `json:"email" validate:"required,email"`
	Username string `json:"username" validate:"required"`
	Password string `json:"password" validate:"required"`
	Role     string `json:"role" validate:"required"`
}

type UserUpdateResponse struct {
	BaseModel
}

type GetUserListResponse struct {
	BaseModel
	Data []schema.UserSchema `json:"data"`
}
