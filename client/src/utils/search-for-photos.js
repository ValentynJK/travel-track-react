export const getPhoto = async (fsq_id) => {

  const data = { fsq_id };
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),

  };
  try {
    const photoLinkResponse = await fetch('/photo_api', options);
    const photoLinkResponseJSON = await photoLinkResponse.json();
    return photoLinkResponseJSON
  }
  catch (error) { console.log(error) }
};
