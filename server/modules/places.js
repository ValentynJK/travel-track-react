import fetch from 'node-fetch';

export const getPlaces = async (city, category, options) => {
  try {
    const url = `https://api.foursquare.com/v3/places/search?${category ? 'categories=' + category + '&' : ''}fields=fsq_id,categories,link,location,name,geocodes&sort=POPULARITY&limit=2&near=${city}`;
    const response = await fetch(url, options);
    const responseJSON = await response.json();
    const places = responseJSON.results;
    return places;
  }
  catch (error) { console.log(error) }
}
