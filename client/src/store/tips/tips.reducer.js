import TIPS_ACTION_TYPES from './tips.types';

const TIPS_INITIAL_STATE = {
  isTipsLoading: false,
  isTipsLoaded: false,
  tips: [],
  error: null
}

export const tipsReducer = (state = TIPS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case TIPS_ACTION_TYPES.FETCH_TIPS_START:
      return {
        ...state,
        isTipsLoading: true,
        isTipsLoaded: false
      };
    case TIPS_ACTION_TYPES.FETCH_TIPS_SUCCESS:
      return {
        ...state,
        isTipsLoading: false,
        isTipsLoaded: true,
        tips: [...state.tips, payload]
      };
    case TIPS_ACTION_TYPES.FETCH_TIPS_FAILED:
      return {
        ...state,
        isTipsLoading: false,
        isTipsLoaded: false,
        error: payload
      };
    default:
      return state
  }
};
