import PHOTOS_ACTION_TYPES from "./photos.types";
import { createAction } from "../../utils/store/createAction";
import { getPhoto } from "../../utils/search-for-photos"; // util sends request to server and gets photo

const fetchPhotoLink = async (fsq_id) => {
  const response = await getPhoto(fsq_id);
  return response;
};

export const fetchPhotosStart = () => createAction(PHOTOS_ACTION_TYPES.FETCH_PHOTOS_START);

export const fetchPhotosSuccess = (photos) => createAction(PHOTOS_ACTION_TYPES.FETCH_PHOTOS_SUCCESS, photos);

export const fetchPhotosFailed = (error) => createAction(PHOTOS_ACTION_TYPES.FETCH_PHOTOS_FAILED, error)

export const fetchPhotosAsync = (places) => async (dispatch) => {
  dispatch(fetchPhotosStart());

  try {
    const photosArray = await Promise.all(places.map(async (place) => {
      const link = await fetchPhotoLink(place.fsq_id);
      return { 'fsq_id': place.fsq_id, link } // output array of object {fsq_id: "...", link: "..."}
    }));
    const photosObject = photosArray.reduce((acc, currValue) => {
      const { fsq_id, link } = currValue;
      return { ...acc, [fsq_id]: link } // output object {fsq_id: link,...}
    }, {});
    dispatch(fetchPhotosSuccess(photosObject))
  }
  catch (error) {
    dispatch(fetchPhotosFailed(error))
  }
};

export const clearPhotos = () => createAction(PHOTOS_ACTION_TYPES.CLEAR_PHOTOS);