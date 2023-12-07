// Enforces stricter parsing and error handling in JavaScript
"use strict";

// Array of abbreviated week day names
export const weekDayNames = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

// Array of abbreviated month names
export const monthsNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Function to format date based on Unix timestamp and timezone
export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthsNames[date.getUTCMonth()];
  return `${weekDayName} ${date.getUTCDate()} ${monthName}`;
};

// Function to format time based on Unix timestamp and timezone
export const getTime = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12}:${minutes} ${period}`;
};

// Function to get hours based on Unix timestamp and timezone
export const getHours = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12}${period}`;
};

// Function to convert meters per second to kilometers per hour
export const mpsToKmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

// Object mapping Air Quality Index (AQI) values to corresponding descriptions
export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air quality is considered satisfactory, and air pollution poses little or no risk.",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution",
  },
  3: {
    level: "Moderate",
    message:
      "Members of sensitive groups may experience health effects; the general public is not likely to be affected",
  },
  4: {
    level: "Poor",
    message:
      "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects",
  },
  5: {
    level: "Very Poor",
    message:
      "Health warnings of emergency conditions; the entire population is more likely to be affected",
  },
};
