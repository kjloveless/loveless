package main

import (
	"log"
	"net/http"
)

func main() {
	// initialize a new servemux, then register functions as handlers for URL
	// patterns
	mux := http.NewServeMux()

	// prefix the route patterns with the required HTTP method
	mux.HandleFunc("GET /{$}", home)

	log.Print("starting server on :8080")

	// start web server w/ http.ListenAndServe(), pass in two parameters: TCP
	// network address to listen and the servemux we created. if
	// http.ListenAndServe() returns an error use log.Fatal() to log error and
	// terminate.
	err := http.ListenAndServe(":8080", mux)
	log.Fatal(err)
}
