package schema

import "go.mongodb.org/mongo-driver/v2/bson"

type AuditLogSchema struct {
	LogBaseSchema `bson:",inline"`
	UserAgent     string         `json:"userAgent" bson:"user_agent"`
	IP            string         `json:"ip" bson:"ip"`
	Route         string         `json:"route" bson:"route"`
	UserID        string         `json:"userId" bson:"user_id"`
	Method        string         `json:"method" bson:"method"`
	Resource      string         `json:"resource" bson:"resource"`
	RequestBody   map[string]any `json:"body" bson:"request_body"`
}

type ResponseLogSchema struct {
	LogBaseSchema `bson:",inline"`
	AuditlogID    bson.ObjectID  `json:"auditlogId" bson:"audit_log_id"`
	Method        string         `json:"method" bson:"method"`
	Route         string         `json:"route" bson:"route"`
	Resource      string         `json:"resource" bson:"resource"`
	Latency       int32          `json:"latency" bson:"latency"`
	Payload       map[string]any `json:"payload" bson:"payload"`
}

type MetricsLogSchema struct {
	LogBaseSchema `bson:",inline"`
	CPUUsage      float64 `json:"cpuUsage" bson:"cpu_usage"`
	RAMUsage      float64 `json:"ramUsage" bson:"ram_usage"`
	Disk          float64 `json:"disk" bson:"disk"`
	NetReceived   float64 `json:"netReceived" bson:"net_received"`
	NetSent       float64 `json:"netSent" bson:"net_sent"`
}
