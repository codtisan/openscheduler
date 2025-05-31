package config

import (
	"fmt"

	"github.com/spf13/viper"
)

type ServerConfig struct {
	Server BaseConfig
	Mongo  MongoConfig
}

type BaseConfig struct {
	Env     string
	Port    int32
	Version string
	Secret  string
}

type MongoConfig struct {
	URI string
}

var (
	SystemConfig ServerConfig
)

func LoadConfig() {
	vp := viper.New()
	vp.SetConfigName("config")
	vp.AddConfigPath(".")
	vp.SetConfigType("toml")
	err := vp.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("Fatal error config file: %s \n", err))
	}
	var config ServerConfig
	err = vp.Unmarshal(&config)
	if err != nil {
		panic(fmt.Errorf("Fatal error config file: %s \n", err))
	}
	SystemConfig = config
}
