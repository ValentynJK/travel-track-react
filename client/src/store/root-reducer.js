import { combineReducers } from 'redux'; // for creating root reducer
import { forecastReducer } from './forecast/forecast.reducer';
import { photosReducer } from './photos/photos.reducer';
import { placesReducer } from './places/places.reducer';
import { tipsReducer } from './tips/tips.reducer'

// root reducer
export const rootReducer = combineReducers({
  forecast: forecastReducer,
  places: placesReducer,
  photos: photosReducer,
  tips: tipsReducer
});