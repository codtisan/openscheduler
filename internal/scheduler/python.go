package scheduler

import (
	"time"

	"github.com/go-co-op/gocron/v2"
)

func AddPythonJob(interval int64, task func()) {
	_, err := Scheduler.NewJob(
		gocron.DurationJob(
			time.Second*time.Duration(interval),
		),
		gocron.NewTask(
			task,
		),
	)
	if err != nil {
		panic(err)
	}
}

func CreatePythonJob(interval int64, shellScript string) {
	AddShellJob(interval, func() {
	})
}
