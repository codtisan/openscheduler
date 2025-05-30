package schema

type UserSchema struct {
	BaseSchema
	Email    string `bson:"email"`
	Username string `bson:"username"`
	Password string `bson:"password"`
	Role     string `bson:"role"`
}
