package schema

type ProjectSchema struct {
	BaseSchema  `bson:",inline"`
	Name        string
	Description string
}
