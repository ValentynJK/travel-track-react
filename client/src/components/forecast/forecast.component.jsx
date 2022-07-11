// react
import { useContext } from 'react';

// context
import { PlacesContext } from '../../contexts/places.context';

import './forecast.styles.scss';

const Forecast = () => {

  const { forecast } = useContext(PlacesContext);

  // to check if forecast ready to be rendered
  const isForecast = () => {
    return Object.keys(forecast).length !== 0;
  }

  // Convert original value in Kelvins to Celsius
  const kelvinToCelsius = (K) => ((K - 273.15)).toFixed(0);
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = weekDays[(new Date()).getDay()]

  return (
    <>
      {isForecast() && (<div className='forecast-container'>

        <div className="weather-main-info">
          <h2>{currentDay}</h2>
          <h2>{forecast.weather[0].description.toUpperCase()}</h2>
        </div>
        <div className='weather-container'>
          <div className='icon-container'>
            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`} alt='' />
          </div>
          <div className="temperature-container">
            <h2>{kelvinToCelsius(forecast.main.temp)}&deg;C</h2>
          </div>
          <div className='additional-data-container'>
            <span>Max temperature: {kelvinToCelsius(forecast.main.temp_max)}&deg;C </span>
            <span>Max temperature: {kelvinToCelsius(forecast.main.temp_min)}&deg;C </span>
            <span>Humidity: {forecast.main.humidity} &#37; </span>
            <span>Wind: {forecast.wind.speed} km/h </span>
          </div>
        </div>
      </div>
      )
      }
    </>
  )


};

export default Forecast;