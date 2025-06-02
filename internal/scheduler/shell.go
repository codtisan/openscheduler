package scheduler

import (
	"fmt"
	"os/exec"
	"time"

	"github.com/go-co-op/gocron/v2"
)

func AddShellJob(interval int64, task func()) {
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

func CreateShellJob(interval int64, shellScript string) {
	AddShellJob(interval, func() {
		cmd := exec.Command(shellScript)
		fmt.Println(cmd.Output())
	})
}
