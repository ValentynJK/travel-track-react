import { combineReducers } from 'redux'; // for creating root reducer
import { forecastReducer } from './forecast/forecast.reducer';

// root reducer
export const rootReducer = combineReducers({
  forecast: forecastReducer
});