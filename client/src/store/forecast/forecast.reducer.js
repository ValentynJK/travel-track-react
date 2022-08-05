import FORECAST_ACTION_TYPES from './forecast.types';

export const FORECAST_INITIAL_STATE = {
  forecast: {},
  isLoaded: false,
  isLoading: false,
  error: null
};

export const forecastReducer = (state = FORECAST_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FORECAST_ACTION_TYPES.FETCH_FORECAST_START:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      };
    case FORECAST_ACTION_TYPES.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        forecast: payload,
        isLoading: false
      };
    case FORECAST_ACTION_TYPES.FETCH_FORECAST_FAILED:
      return {
        ...state,
        isLoaded: false,
        isLoading: false,
        error: payload
      };
    default:
      return state
  }
}