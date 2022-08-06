import axios from 'axios'
import {
  SEARCH_RESULT,
  SEARCH_PROFILE
} from './types';

// Get results nearby search
export const searchResult = (url) => async dispatch => {
  console.log("searchaction=>", url)
  const res = await axios.post('/api/search', {api: url});
  console.log(res.data)
  dispatch({
    type: SEARCH_RESULT,
    payload: res.data
  });
}
// Get posts
export const searchProfile = (data) => async dispatch => {
  console.log("searchprofileaction=>", {placdId: data})
  const res = await axios.post('/api/search/profile', {placeId: data});
  console.log(res.data)
  dispatch({
    type: SEARCH_PROFILE,
    payload: res.data
  });
}