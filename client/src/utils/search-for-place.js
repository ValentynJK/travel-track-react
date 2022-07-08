// api fetch post request to back end. Result is place details object

export const getPlaceDetails = async (fsq_id) => {

  const data = { fsq_id };
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  try {
    const response = await fetch('/place_api', options);
    const responseJSON = await response.json();
    return responseJSON;
  }
  catch (error) { console.log(error) }
};