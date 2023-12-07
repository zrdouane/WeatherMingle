// Enforces stricter parsing and error handling in JavaScript
"use strict";

// Importing functions from external module
import { updateWeather, error404 } from "./app.js";

// Default location for the hash in case of an error or no hash present
const defaultLocation = "#/weather?lat=32.334193&lon=-6.353335";

// Function to retrieve the current location and update the weather
const currentLocation = function () {
  window.navigator.geolocation.getCurrentPosition(
    // Success callback
    (res) => {
      const { latitude, longitude } = res.coords;
      // Update weather based on current location
      updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    },
    // Error callback
    (err) => {
      // Redirect to default location in case of an error
      window.location.hash = defaultLocation;
    }
  );
};

// Function to update weather based on a searched location query
const searchedLocation = (query) => updateWeather(...query.split("&"));

// Map of routes and corresponding functions
const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

// Function to check and handle hash changes
const checkHash = function () {
  // Extracting route and query from the hash
  const requestURL = window.location.hash.slice(1);
  const [route, query] = requestURL.includes
    ? requestURL.split("?")
    : [requestURL];

  // Checking if the route exists in the map and calling the corresponding function
  routes.get(route) ? routes.get(route)(query) : error404();
};

// Event listener for hash changes
window.addEventListener("hashchange", checkHash);

// Event listener for page load
window.addEventListener("load", function () {
  // Setting default location if no hash is present, otherwise checking the hash
  if (!window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});
