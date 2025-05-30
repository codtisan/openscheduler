package main

import (
	"open-scheduler/api"
	"open-scheduler/api/middleware"
	"open-scheduler/pkg/databases"

	"github.com/gofiber/fiber/v3"
)

func main() {
	databases.Init()
	app := fiber.New()
	middleware.NewMiddlewares(app)
	api.NewRoutes(app)
	app.Listen(":8000")
}
