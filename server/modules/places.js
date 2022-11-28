import fetch from 'node-fetch';

export const getPlaces = async (city, category, options) => {
  try {
    const url = `https://api.foursquare.com/v3/places/search?${category ? 'categories=' + category + '&' : ''}fields=fsq_id,categories,link,location,name,geocodes&sort=POPULARITY&limit=6&near=${city}`;
    console.log(url)
    const response = await fetch(url, options);
    const responseJSON = await response.json();
    console.log('responseJSON', responseJSON)
    const places = responseJSON.results;
    return places;
  }
  catch (error) { console.log('error', error) }
}
