package api

import (
	"open-scheduler/api/controller"

	"github.com/gofiber/fiber/v3"
)

func NewRoutes(app *fiber.App) {
	app.Get("/", controller.HealthCheckAPI)
	app.Get("/health", controller.HealthCheckDBAPI)

	app.Post("/user/login", controller.UserLoginAPI)
	app.Get("/user", controller.GetUserListAPI)
	app.Post("/user/create", controller.UserCreateAPI)
	app.Delete("/user/:user_id", controller.UserDeleteAPI)
	app.Put("/user/:user_id", controller.UserUpdateAPI)

	app.Get("/serviceaccount", controller.GetServiceAccountListAPI)
	app.Post("/serviceaccount/create", controller.ServiceAccountCreateAPI)
	app.Delete("/serviceaccount/:account_id", controller.ServiceAccountDeleteAPI)
	app.Put("/serviceaccount/:account_id", controller.ServiceAccountDeleteAPI)

	app.Get("/role", controller.GetRoleListAPI)
	app.Post("/role/create", controller.RoleCreateAPI)
	app.Delete("/role/:role_id", controller.RoleDeleteAPI)
	app.Put("/role/:role_id", controller.RoleUpdateAPI)

	app.Post("/project/create", controller.ProjectCreateAPI)
	app.Delete("/project/:project_id", controller.ProjectDeleteAPI)
	app.Get("/project", controller.GetProjectListAPI)
	app.Put("/project/:project_id", controller.ProjectUpdateAPI)

	app.Get("/auditlog", controller.GetAuditLogListAPI)
	app.Get("/metricslog", controller.GetMetricsLogListAPI)
	app.Get("/responselog", controller.GetResponseLogListAPI)
}
