package api

import (
	"open-scheduler/api/controller"

	"github.com/gofiber/fiber/v3"
)

func NewRoutes(app *fiber.App) {
	app.Get("/", controller.HealthCheckAPI)
	app.Get("/health", controller.HealthCheckDBAPI)
	app.Post("/user/login", controller.UserLoginAPI)
	app.Post("/user/create", controller.UserCreateAPI)
	app.Delete("/user/:user_id", controller.UserDeleteAPI)
	app.Post("/serviceaccount/create", controller.ServiceAccountCreateAPI)
	app.Post("/role/create", controller.RoleCreateAPI)
}
