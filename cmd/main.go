package main

import (
	"open-scheduler/api"

	"github.com/gofiber/fiber/v3"
)

func main() {
	app := fiber.New()
	api.NewMiddlewares(app)
	api.NewRoutes(app)
	app.Listen(":8000")
}
