// api fetch post request to back end. Result is place array with photo link

export const getPlaces = async (cityName) => {

  const data = { cityName };
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  try {

    const response = await fetch('/places_api', options);
    const responseJSON = await response.json();
    // console.log(responseJSON)
    return responseJSON;
  }
  catch (error) { console.log(error) }
};