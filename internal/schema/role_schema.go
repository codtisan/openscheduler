package schema

type RoleSchema struct {
	BaseSchema `bson:",inline"`
	Dashboard  []string `bson:"dashboard"`
	Log        []string `bson:"log"`
	Workflow   []string `bson:"workflow"`
	Alert      []string `bson:"alert"`
	Task       []string `bson:"task"`
	Name       string   `bson:"name"`
}
