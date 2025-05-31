package main

import (
	"open-scheduler/api"
	"open-scheduler/api/middleware"
	"open-scheduler/internal/config"
	"open-scheduler/pkg/databases"
	"open-scheduler/pkg/logger"

	"github.com/gofiber/fiber/v3"
)

func main() {
	config.LoadConfig()
	config.InitValidator()
	databases.InitMongo()
	logger.Init()
	app := fiber.New()
	middleware.NewMiddlewares(app)
	api.NewRoutes(app)
	app.Listen(":8000")
}
