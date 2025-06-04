package schema

type RoleSchema struct {
	BaseSchema `bson:",inline"`
	Dashboard  []string `bson:"dashboard" json:"dashboard"`
	Log        []string `bson:"log" json:"log"`
	Workflow   []string `bson:"workflow" json:"workflow"`
	Alert      []string `bson:"alert" json:"alert"`
	Task       []string `bson:"task" json:"task"`
	Name       string   `bson:"name" json:"name"`
}
