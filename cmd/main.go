package main

import (
	"open-scheduler/api"

	"github.com/gofiber/fiber/v3"
)

func main() {
	app := fiber.New()
	api.NewRoutes(app)
	api.NewMiddlewares(app)
	app.Listen(":8000")
}
