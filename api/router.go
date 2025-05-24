package api

import (
	"open-scheduler/api/controller"

	"github.com/gofiber/fiber/v3"
)

func NewRoutes(app *fiber.App) {
	app.Get("/", controller.HealthCheckAPI)
	app.Post("/user/login", controller.UserLoginAPI)
}
