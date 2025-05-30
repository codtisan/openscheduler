package middleware

import (
	"log"
	"open-scheduler/internal/schema"
	"open-scheduler/pkg/databases"
	"time"

	"github.com/gofiber/fiber/v3"
	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/disk"
	"github.com/shirou/gopsutil/mem"
	"go.mongodb.org/mongo-driver/v2/bson"
	"golang.org/x/net/context"
)

func metricslogMiddleware(c fiber.Ctx) error {
	ctx := context.TODO()
	cpuPercent, _ := cpu.Percent(time.Second, false)
	vmStat, err := mem.VirtualMemory()
	diskStat, err := disk.Usage("/")
	if err != nil {
		log.Fatal(err)
	}
	metricsLog := schema.MetricsLogSchema{
		CPUUsage:     cpuPercent[0],
		RAMUsage:     vmStat.UsedPercent,
		Disk:         float64(diskStat.Free),
		NetBandwidth: 1,
		BaseSchema: schema.BaseSchema{
			ID:        bson.NewObjectID(),
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
	}
	databases.LogDB.Collection("metrics_log").InsertOne(ctx, metricsLog)
	c.Next()
	return nil
}
