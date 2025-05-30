package schema

type UserSchema struct {
	BaseSchema `bson:",inline"`
	Email      string `bson:"email"`
	Username   string `bson:"username"`
	Password   string `bson:"password"`
	Role       string `bson:"role"`
}

type ServiceAccountSchema struct {
	BaseSchema `bson:",inline"`
	Email      string `bson:"email"`
	Username   string `bson:"username"`
	PrivateKey string `bson:"private_key"`
	PublicKey  string `bson:"public_key"`
	Role       string `bson:"role"`
}

type RoleSchema struct {
	BaseSchema `bson:",inline"`
	Dashboard  []string `bson:"dashboard"`
	Log        []string `bson:"log"`
	Workflow   []string `bson:"workflow"`
	Alert      []string `bson:"alert"`
	Task       []string `bson:"task"`
	Name       string   `bson:"name"`
}
