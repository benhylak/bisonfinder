import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Home = () => {
  const [bisonData, setBisonData] = useState([]);

  useEffect(() => {
    fetchBisonData();
  }, []);

  const fetchBisonData = async () => {
    const response = await fetch("https://api.bisontracker.com");

    // Converting the fetched data into JSON format
    const data = await response.json();

    // Setting the 'bisonData' state with the fetched JSON data
    setBisonData(data);

    // Printing out the location of each bison
    data.forEach(({ location }) =>
      console.log(
        `Bison Location: Lat - ${location.lat}, Lng - ${location.lng}`
      )
    );
  };

  return {
    /*TODO*/
  };
};

export default Home;
