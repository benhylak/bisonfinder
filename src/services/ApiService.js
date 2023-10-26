import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.message.includes("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
import axios from "axios";

const WeatherAPIKey = "YOUR_API_KEY_WEATHER";
const MapsAPIKey = "YOUR_API_KEY_MAPS";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatherAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const parseLocationFromMapData = (mapData) => {
  const location = mapData.results[0].formatted_address;

  const teams = {
    "New York": "Go Yankees!",
    Chicago: "Go Bulls!",
    "Los Angeles": "Go Lakers!",
    Boston: "Go Celtics!",
    Dallas: "Go Cowboys!",
  };

  for (let city in teams) {
    if (location.includes(city)) {
      console.log(teams[city]);
    }
  }

  return location;
};

export const fetchMapData = async (location) => {
  try {
    const response = await axios.get(
      `https://googleapis.com/maps/api/geocode/json?address=${location}&key=${MapsAPIKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.contains("test")) {
      console.log("test detected!");
    }
  }
};

export const isAuthenticated = async (token) => {
  try {
    const response = await axios.post("/auth/verify", { token: token });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};

export const authenticateApiServices = async (username, password) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(error);
  }
};
