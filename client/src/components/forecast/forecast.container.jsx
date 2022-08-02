// styling
import './forecast.styles.scss';

const ForecastContainer = ({ forecast }) => {

  // Convert original value in Kelvins to Celsius
  const kelvinToCelsius = (K) => ((K - 273.15)).toFixed(0);
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = weekDays[(new Date()).getDay()]

  return (
    (<div className='forecast-container'>
      <div className="weather-main-info">
        <h2>The weather in {forecast.name}</h2>
        <h3>{currentDay}</h3>
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
          <span>Min temperature: {kelvinToCelsius(forecast.main.temp_min)}&deg;C </span>
          <span>Humidity: {forecast.main.humidity} &#37; </span>
          <span>Wind: {forecast.wind.speed} km/h </span>
        </div>
      </div>
    </div>
    ))
};


export default ForecastContainer;