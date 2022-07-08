import fetch from 'node-fetch';

export const getPlaceDetails = async (fsq_id, options) => {
  try {
    const response = await fetch(`https://api.foursquare.com/v3/places/${fsq_id}?fields=categories,location,name,geocodes`, options);
    const responseJSON = await response.json();
    const placeDetails = responseJSON;
    console.log(placeDetails)
    return placeDetails;
  }
  catch (error) { console.log(error) }
}
