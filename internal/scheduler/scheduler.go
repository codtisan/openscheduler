package scheduler

import (
	"github.com/go-co-op/gocron/v2"
)

var (
	Scheduler gocron.Scheduler
)

func Init() {
	s, err := gocron.NewScheduler()
	if err != nil {
		panic(err)
	}
	Scheduler = s
}
