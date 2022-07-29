import FORECAST_ACTION_TYPES from "./forecast.types";
import { createAction } from "../../utils/store/createAction"; // util which generate object with 'type' and 'payload' keys

export const setForecastRedux = (forecast) => createAction(FORECAST_ACTION_TYPES.SET_FORECAST, forecast);

