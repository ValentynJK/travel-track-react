import fetch from 'node-fetch';

export const getPlaces = async (city, options) => {
  try {
    const response = await fetch(`https://api.foursquare.com/v3/places/search?fields=fsq_id,categories,link,location,name,geocodes&limit=2&near=${city}`, options);
    const responseJSON = await response.json();
    const places = responseJSON.results;
    // console.log(places)
    return places;
  }
  catch (error) { console.log(error) }
}
