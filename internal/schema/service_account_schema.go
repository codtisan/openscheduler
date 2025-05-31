package schema

type ServiceAccountSchema struct {
	BaseSchema `bson:",inline"`
	Email      string `bson:"email"`
	Username   string `bson:"username"`
	PrivateKey string `bson:"private_key"`
	PublicKey  string `bson:"public_key"`
	Role       string `bson:"role"`
}
