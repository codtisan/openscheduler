package schema

import "go.mongodb.org/mongo-driver/v2/bson"

type AuditLogSchema struct {
	LogBaseSchema `bson:",inline"`
	UserAgent     string         `bson:"user_agent"`
	IP            string         `bson:"ip"`
	Route         string         `bson:"route"`
	UserID        string         `bson:"user_id"`
	Method        string         `bson:"method"`
	Resource      string         `bson:"resource"`
	RequestBody   map[string]any `bson:"request_body"`
}

type ResponseLogSchema struct {
	LogBaseSchema `bson:",inline"`
	AuditlogID    bson.ObjectID  `bson:"audit_log_id"`
	Method        string         `bson:"method"`
	Route         string         `bson:"route"`
	Resource      string         `bson:"resource"`
	Latency       int32          `bson:"latency"`
	Payload       map[string]any `bson:"payload"`
}

type MetricsLogSchema struct {
	LogBaseSchema `bson:",inline"`
	CPUUsage      float64 `bson:"cpu_usage"`
	RAMUsage      float64 `bson:"ram_usage"`
	Disk          float64 `bson:"disk"`
	NetBandwidth  float64 `bson:"net_bandwidth"`
}
