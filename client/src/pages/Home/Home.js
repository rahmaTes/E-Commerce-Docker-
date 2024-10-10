import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Home.module.css";
import api from "../../api";



 
export const Home = ({ setIsAuthenticated }) => {
  const history = useHistory();
  const [weather, setWeather] = useState("");
  const [weatherError, setWeatherError] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);



  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      try {
        const response = await api.getWeather();
        if (isMounted) {
          setWeather(response?.data?.value);
          setWeatherError(null);
          setLoadingWeather(false);
        }
      } catch (err) {
        console.log("weather err", err);
        if (isMounted) {
          setWeatherError("Failed to fetch weather data. Please try again later.");
          setLoadingWeather(false);
        }
      }
    };
  

    fetchWeather();
   

    return () => {
      isMounted = false;
    };
  }, []);
   

  return (
    <>
    
    <div className={classes.container}>
      <div className={classes.weatherContainer}>
        <h2>Weather</h2>
        {loadingWeather ? (
          <p>Loading weather...</p>
        ) : weatherError ? (
          <p>{weatherError}</p>
        ) : (
          <div>
            <p>{weather}</p>
          </div>
        )}
      </div>
     
    </div>

    </>
  );
};


