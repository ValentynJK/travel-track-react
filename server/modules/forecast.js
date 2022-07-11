import fetch from 'node-fetch';

export const getForecast = async (city, API_WEATHER) => {
  const urlToFetch = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_WEATHER}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  }
  catch (error) {
    console.log(error)
  }
};