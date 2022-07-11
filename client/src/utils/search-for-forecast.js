// api fetch post request to back end. Result is forecast object

export const getForecast = async (cityName) => {

  const data = { cityName };
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  try {
    const response = await fetch('/forecast_api', options);
    const responseJSON = await response.json();
    return responseJSON;
  }
  catch (error) { console.log(error) }
};