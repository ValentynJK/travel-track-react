import FORECAST_ACTION_TYPES from './forecast.types';

export const FORECAST_INITIAL_STATE = {
  forecast: {}
};

export const forecastReducer = (state = FORECAST_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FORECAST_ACTION_TYPES.SET_FORECAST:
      return {
        ...state,
        forecast: payload
      };
    default:
      return state
  }
}