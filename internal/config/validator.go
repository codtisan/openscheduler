package config

import "github.com/go-playground/validator/v10"

var Validator *validator.Validate

func InitValidator() {
	validate := validator.New()
	Validator = validate
}
