import PHOTOS_ACTION_TYPES from "./photos.types";

const PHOTOS_INITIAL_STATE = {
  photos: {},
  isLoading: false,
  isLoaded: false,
  error: null
}

export const photosReducer = (state = PHOTOS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PHOTOS_ACTION_TYPES.FETCH_PHOTOS_START:
      return {
        ...state,
        isLoading: true
      }
    case PHOTOS_ACTION_TYPES.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        photos: payload
      }
    case PHOTOS_ACTION_TYPES.FETCH_PHOTOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case PHOTOS_ACTION_TYPES.CLEAR_PHOTOS:
      return PHOTOS_INITIAL_STATE
    default:
      return state
  }
}