import fetch from 'node-fetch';

export const getPlaceTips = async (fsq_id, options) => {
  try {
    const response = await fetch(`https://api.foursquare.com/v3/places/${fsq_id}/tips?limit=5&fields=id%2Ctext&sort=POPULAR`, options);
    const responseJSON = await response.json();
    const placeTips = responseJSON;
    return placeTips;
  }
  catch (error) { console.log(error) }
}
