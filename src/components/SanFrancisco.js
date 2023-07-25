import React, { Component } from 'react';

class SanFrancisco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            landmarks: ['Golden Gate Bridge', 'Alcatraz Island', 'Fisherman\'s Wharf', 'Chinatown', 'Lombard Street'],
            restaurants: ['Saison', 'Benu', 'Atelier Crenn', 'Quince', 'The French Laundry'],
            weather: null,
        };
    }
    
    componentDidMount() {
        this.getWeather();
    }
    
    getWeather = async () => {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=YOUR_API_KEY');
        const data = await response.json();
        this.setState({ weather: data.main });
    }
    
    render() {
        const { landmarks, restaurants, weather } = this.state;
        
        return (
            <div className="SanFrancisco">
            <h1>Welcome to San Francisco!</h1>
            <h2>Landmarks</h2>
            <ul>
            {landmarks.map((landmark, index) => <li key={index}>{landmark}</li>)}
            </ul>
            <h2>Top Restaurants</h2>
            <ul>
            {restaurants.map((restaurant, index) => <li key={index}>{restaurant}</li>)}
            </ul>
            <h2>Current Weather</h2>
            {weather ? <p>{`Temperature: ${weather.temp} Humidity: ${weather.humidity}`}</p> : null}
            </div>
            );
        }
    }
    
    export default SanFrancisco;