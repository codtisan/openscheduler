package logger

import (
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func Init() {
	zerolog.TimeFieldFormat = zerolog.TimeFormatUnix
}

func Fatal(err error, message string) {
	log.Fatal().
		Err(err).
		Msgf(message)
}

func Debug(message string) {
	log.Debug().
		Msgf(message)
}

func Info(message string) {
	log.Info().
		Msgf(message)
}

func Error(err error, message string) {
	log.Error().
		Err(err).
		Msgf(message)
}
