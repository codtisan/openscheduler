package schema

type HTTPTaskSchema struct {
	BaseSchema  `bson:",inline"`
	TaskID      string         `bson:"task_id"`
	Status      string         `bson:"status"`
	Name        string         `bson:"name"`
	Description string         `bson:"description"`
	Target      string         `bson:"target"`
	Interval    int            `bson:"interval"`
	Retry       int            `bson:"retry"`
	Method      string         `bson:"method"`
	Check       int            `bson:"check"`
	Timeout     int            `bson:"timeout"`
	Body        map[string]any `bson:"body"`
}
