
import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Home = () => {
const [bisonData, setBisonData] = useState([]);

useEffect(() => {
    fetchBisonData();
}, []);

const fetchBisonData = async () => {
    const response = await fetch('https://api.bisontracker.com');
    const data = await response.json();
    setBisonData(data);
};

return (
    <div>
    <Map center={[45.0, -102.0]} zoom={5}>
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {bisonData.map((bison, index) => (
        <Marker
        key={index}
        position={[bison.location.lat, bison.location.lng]}
        icon={bison.fartedRecently ? 'fartIcon' : bison.tryingToEscape ? 'escapeIcon' : 'defaultIcon'}
        >
        <Popup>
        <p>{bison.name}</p>
        <p>{bison.fartedRecently ? 'Farted recently' : 'Has not farted recently'}</p>
        <p>{bison.tryingToEscape ? 'Trying to escape' : 'Not trying to escape'}</p>
        </Popup>
        </Marker>
        ))}
        </Map>
        </div>
        );
    };
    
    export default Home;
