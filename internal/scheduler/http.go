package scheduler

import (
	"errors"
	"io"
	"net/http"
	"time"

	"github.com/go-co-op/gocron/v2"
	"github.com/google/uuid"
)

func AddHTTPJob(interval int, targetUrl string, retry int, timeout int, method string, check int, body io.Reader) (uuid.UUID, error) {
	j, err := Scheduler.NewJob(
		gocron.DurationJob(
			time.Second*time.Duration(interval),
		),
		gocron.NewTask(
			func() {
				for i := 0; i < retry; i++ {
					err := SendHTTPRequest(targetUrl, timeout, method, check, body)
					if err == nil {
						break
					}
					time.Sleep(time.Second)
				}
			},
		),
	)
	if err != nil {
		return uuid.UUID{}, err
	}
	return j.ID(), nil
}

func SendHTTPRequest(targetUrl string, timeout int, method string, check int, body io.Reader) error {
	client := http.Client{Timeout: time.Duration(timeout)}
	switch method {
	case "Get":
		res, err := client.Get(targetUrl)
		if err != nil {
			return err
		}
		if res.StatusCode != check {
			return errors.New("Failed to call the api")
		}
	case "Post":
		res, err := client.Post(targetUrl, "application/json", body)
		if err != nil {
			return err
		}
		if res.StatusCode != check {
			return errors.New("Failed to call the api")
		}
	}
	return errors.New("Method not allowed")
}
