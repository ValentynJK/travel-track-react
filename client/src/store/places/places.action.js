import PLACES_ACTION_TYPES from './places.types';
import { createAction } from '../../utils/store/createAction';
import { getPlaces } from '../../utils/search-for-places'; // request to server
import { fetchPhotosAsync } from '../photos/photos.action';

export const fetchPlacesStart = () => createAction(PLACES_ACTION_TYPES.FETCH_PLACES_START);

export const fetchPlacesSuccess = (places) => createAction(PLACES_ACTION_TYPES.FETCH_PLACES_SUCCESS, places);

export const fetchPlacesFailed = (error) => createAction(PLACES_ACTION_TYPES.FETCH_PLACES_FAILED, error);

export const fetchPlacesAsync = (cityName, category) => async (dispatch) => {
  dispatch(fetchPlacesStart());
  try {
    const fetchedPlaces = await getPlaces(cityName, category)
    dispatch(fetchPlacesSuccess(fetchedPlaces));
    dispatch(fetchPhotosAsync(fetchedPlaces)); // starts fetching photos as soon as places are received
  }
  catch (error) {
    dispatch(fetchPlacesFailed(error))
  }
};

export const clearPlaces = () => createAction(PLACES_ACTION_TYPES.CLEAR_PLACES);