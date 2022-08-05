import PLACES_ACTION_TYPES from './places.types';

export const PLACES_INITIAL_STATE = {
  places: [],
  isLoading: false,
  isLoaded: false
}

export const placesReducer = (state = PLACES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PLACES_ACTION_TYPES.FETCH_PLACES_START:
      return {
        ...state,
        isLoading: true
      };
    case PLACES_ACTION_TYPES.FETCH_PLACES_SUCCESS:
      return {
        ...state,
        places: payload,
        isLoading: false,
        isLoaded: true
      };
    case PLACES_ACTION_TYPES.FETCH_PLACES_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoaded: false
      };
    case PLACES_ACTION_TYPES.CLEAR_PLACES:
      return {
        PLACES_INITIAL_STATE
      }
    default:
      return state
  }
}