import { createAction } from '../../utils/store/createAction';
import TIPS_ACTION_TYPES from './tips.types';
import { getPlaceTips } from '../../utils/search-for-tips';

export const fetchTipsStart = () => createAction(TIPS_ACTION_TYPES.FETCH_TIPS_START);

export const fetchTipsSuccess = (tips) => createAction(TIPS_ACTION_TYPES.FETCH_TIPS_SUCCESS, tips);

export const fetchTipsFailed = (error) => createAction(TIPS_ACTION_TYPES.FETCH_TIPS_FAILED, error);

export const fetchTipsAsync = (fsq_id) => async (dispatch) => {
  dispatch(fetchTipsStart());

  try {
    const placeTips = await getPlaceTips(fsq_id); // fetches tips from the server, [{},{},{}]
    const placeTipsObject = { fsq_id, placeTips }; // 
    dispatch(fetchTipsSuccess(placeTipsObject))
  }
  catch (error) {
    dispatch(fetchTipsFailed(error))
  }
}



