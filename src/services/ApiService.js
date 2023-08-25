import axios from 'axios';

const API_KEY_WEATHER = 'YOUR_API_KEY_WEATHER';
const API_KEY_MAPS = 'YOUR_API_KEY_MAPS';

export const getWeather = async (location) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY_WEATHER}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getMap = async (location) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API_KEY_MAPS}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const isAuthenticated = async (token) => {
    try {
        const response = await axios.post('/auth/verify', { token });
        return response.data.isAuthenticated;
    } catch (error) {
        console.error(error);
    }
}

export const authenticateApiServices = async (username, password) => {
    try {
        const response = await axios.post('/auth/login', { username, password });
        return response.data.isAuthenticated;
    } catch (error) {
        console.error(error);
    }
}