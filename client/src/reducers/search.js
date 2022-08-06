import {
  SEARCH_RESULT,
  SEARCH_PROFILE
} from '../actions/types';

const initialState = {
  results: [],
  profile: null
};

function searchReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_RESULT:
      return {
        ...state,
        results: payload,
        loading: false
      };
    case SEARCH_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default searchReducer;
