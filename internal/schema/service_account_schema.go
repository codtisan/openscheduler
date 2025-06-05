package schema

type ServiceAccountSchema struct {
	BaseSchema `bson:",inline"`
	Email      string `bson:"email" json:"email"`
	Username   string `bson:"username" json:"username"`
	PrivateKey string `bson:"private_key" json:"privateKey"`
	PublicKey  string `bson:"public_key" json:"publicKey"`
	Role       string `bson:"role" json:"role"`
}
