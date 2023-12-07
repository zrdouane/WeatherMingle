// Enforces stricter parsing and error handling in JavaScript
"use strict";

// API key for OpenWeatherMap API (Replace with your actual API key)
const API_KEY = "b907ed77e235f08eb8615a5111ad8e47";

// Function to fetch data from the OpenWeatherMap API
export const fetchData = function (URL, callback) {
  // Using the Fetch API to make an HTTP request
  fetch(`${URL}&appid=${API_KEY}`)
    // Parsing the response as JSON
    .then((res) => res.json())
    // Calling the provided callback function with the data
    .then((data) => callback(data))
    // Handling errors if the request fails
    .catch((error) => console.error("Error fetching data:", error));
};

// Object containing various API endpoints for OpenWeatherMap
export const url = {
  // Endpoint for current weather data based on latitude and longitude
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  // Endpoint for weather forecast data based on latitude and longitude
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  // Endpoint for air pollution data based on latitude and longitude
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  // Endpoint for reverse geocoding based on latitude and longitude
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },
  // Endpoint for geocoding based on a location query
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
