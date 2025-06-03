package schema

type ProjectSchema struct {
	BaseSchema  `bson:",inline"`
	Name        string `json:"name"`
	Description string `json:"description"`
}
