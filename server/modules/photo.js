import fetch from 'node-fetch';

export const getPhoto = async (fsq_id, options) => {
  try {
    const photoResponseJSON = await (await fetch(`https://api.foursquare.com/v3/places/${fsq_id}/photos`, options)).json();
    const firstPhoto = photoResponseJSON[0];
    const link = `${firstPhoto.prefix}500x500${firstPhoto.suffix}`;
    return link
  }
  catch (error) { console.log(error) }
};
