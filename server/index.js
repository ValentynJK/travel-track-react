express
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
import { getForecast } from './modules/forecast.js';

const API_FSQ = process.env.API_FSQ;
const API_WEATHER = process.env.API_WEATHER;

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json({ limit: '1mb' })); // converts request data to json object with data limit in 1mb

// have node serve the files for build react app
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/api', (req, res) => {
  res.json({ message: "Hello, welcome to the Travel Track App!" })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// options for every call
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: API_FSQ
  }
};

// api to get places array
app.post('/places_api', async (request, response) => {
  const city = await request.body.cityName;
  const places = await getPlaces(city, options);
  console.log('places API called'); // to check during test
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  response.json(places);
});

// api to get forecast 
app.post('/forecast_api', async (request, response) => {
  const city = await request.body.cityName;
  const forecast = await getForecast(city, API_WEATHER);
  console.log('forecast API called'); // to check during test
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  response.json(forecast)
})

// api request to get photos
app.post('/photo_api', async (request, response) => {
  const fsq_id = await request.body.fsq_id;
  const photoLink = await getPhoto(fsq_id, options);
  console.log('photo_api called'); // to check during test
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  response.json(photoLink);
})

// api request to get place details
app.post('/place_api', async (request, response) => {
  const fsq_id = await request.body.fsq_id;
  const placeDetails = await getPlaceDetails(fsq_id, options);
  console.log('Place API called'); // to check during test
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  response.json(placeDetails);
})

// api request to get place details
app.post('/tips_api', async (request, response) => {
  const fsq_id = await request.body.fsq_id;
  const placeTips = await getPlaceTips(fsq_id, options);
  console.log('tips API called'); // to check during test
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  response.json(placeTips);
})



