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
	"github.com/shirou/gopsutil/net"
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
	netStat, err := net.IOCounters(true)
	var totalCPUPercent float64
	for _, num := range cpuPercent {
		totalCPUPercent += num
	}
	averageCPUPercent := totalCPUPercent / float64(len(cpuPercent))
	metricsLog := schema.MetricsLogSchema{
		CPUUsage:      averageCPUPercent,
		RAMUsage:      vmStat.UsedPercent,
		Disk:          diskStat.UsedPercent,
		NetReceived:   float64(netStat[0].BytesRecv),
		NetSent:       float64(netStat[0].BytesSent),
		LogBaseSchema: databases.DefaultLogBaseSchema,
	}
	databases.LogDB.Collection("metrics_log").InsertOne(ctx, metricsLog)
	c.Next()
	return nil
}
