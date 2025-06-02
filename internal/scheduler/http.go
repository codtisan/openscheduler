package scheduler

import (
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/go-co-op/gocron/v2"
)

func AddHTTPJob(interval int, task func()) {
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

func CreateHTTPJob(interval int, targetUrl string, retry int, timeout int, method string, check int, body io.Reader) {
	AddHTTPJob(interval, func() {
		switch method {
		case "Get":
			res, err := http.Get(targetUrl)
			if err != nil {
				panic(err)
			}
			if res.StatusCode != check {

			}
		case "Post":
			res, err := http.Post(targetUrl, "application/json", body)
			if err != nil {
				panic(err)
			}
			if res.StatusCode != check {
			}
		case "Delete":
			res, err := http.NewRequest(http.MethodDelete, targetUrl, body)
			if err != nil {
				panic(err)
			}
			fmt.Println(res)
		case "Put":
			res, err := http.NewRequest(http.MethodPut, targetUrl, body)
			if err != nil {
				panic(err)
			}
			fmt.Println(res)
		}
	})
}
