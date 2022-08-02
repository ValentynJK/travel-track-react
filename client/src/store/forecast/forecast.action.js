import FORECAST_ACTION_TYPES from "./forecast.types";
import { createAction } from "../../utils/store/createAction"; // util which generate object with 'type' and 'payload' keys
import { getForecast } from "../../utils/search-for-forecast"; // sends request to server with city name and receives forecast

// inits fetching and changes forecast isLoading status
export const fetchForecastStart = () => createAction(FORECAST_ACTION_TYPES.FETCH_FORECAST_START);

// success end of forecast fetch, changes state with forecast payload
export const fetchForecastSuccess = (forecast) => createAction(FORECAST_ACTION_TYPES.FETCH_FORECAST_SUCCESS, forecast);

// if case of failure adds error to forecast state and set isLoading to false
export const fetchForecastFailed = (error) => createAction(FORECAST_ACTION_TYPES.FETCH_FORECAST_FAILED, error);

export const fetchForecastAsync = (cityName) => async (dispatch) => {
  dispatch(fetchForecastStart());
  try {
    const forecastObject = await getForecast(cityName);
    dispatch(fetchForecastSuccess(forecastObject))
  }
  catch (error) {
    dispatch(fetchForecastFailed(error))
  }
};


