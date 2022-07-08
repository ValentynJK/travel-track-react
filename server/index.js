// express
import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// utilities
import { getPhoto } from './modules/photo.js';
import { getPlaces } from './modules/places.js';
import { getPlaceDetails } from './modules/place.js';
import { getPlaceTips } from './modules/tips.js';
import 'dotenv/config';

const API = process.env.API

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json({ limit: '1mb' })); // converts request data to json object with data limit in 1mb

// have node serve the files for build react app
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/api', (req, res) => {
  res.json({ message: "Hello there, welcome to the travel track application!" })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// options for every call
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: API
  }
};


// api to get places array
// to be rewritten in post request which receives city Name
app.post('/places_api', async (request, response) => {
  const city = await request.body.cityName;
  const places = await getPlaces(city, options);
  console.log('places API called')
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  response.json(places);
});

// api request to get photos
app.post('/photo_api', async (request, response) => {
  const fsq_id = await request.body.fsq_id;
  const photoLink = await getPhoto(fsq_id, options);
  console.log('photo_api called')
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  response.json(photoLink);
})

// api request to get place details
app.post('/place_api', async (request, response) => {
  const fsq_id = await request.body.fsq_id;
  const placeDetails = await getPlaceDetails(fsq_id, options);
  console.log('Place API called');
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  response.json(placeDetails);
})

// api request to get place details
app.post('/tips_api', async (request, response) => {
  const fsq_id = await request.body.fsq_id;
  const placeTips = await getPlaceTips(fsq_id, options);
  console.log('tips API called')
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  response.json(placeTips);
})



