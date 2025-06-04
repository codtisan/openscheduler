package schema

type UserSchema struct {
	BaseSchema `bson:",inline"`
	Email      string `bson:"email" json:"email"`
	Username   string `bson:"username" json:"username"`
	Password   string `bson:"password" json:"password"`
	Role       string `bson:"role" json:"role"`
}
