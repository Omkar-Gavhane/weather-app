const config = {
  API_BASE_URL: "https://api.openweathermap.org/data/2.5/weather",
  API_KEY: process.env.REACT_APP_OPENWEATHER_API_KEY, // Load the API key from the environment variables
  DEFAULT_CITY: "Pune", // Optional: Default city to display weather for
  UNITS: "metric", // Use "metric" for Celsius, "imperial" for Fahrenheit
};

export default config;
