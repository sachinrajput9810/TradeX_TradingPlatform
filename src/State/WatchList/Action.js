import api from "@/Config/api";
import * as types from "./ActionTypes";


// Action Creators
export const getUserWatchlist = (jwt) => async (dispatch) => {
    
  dispatch({ type: types.GET_USER_WATCHLIST_REQUEST });
  try {
    const response = await api.get("/api/watchlist/user" , {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    }); // Corrected missing closing quote
    dispatch({
      type: types.GET_USER_WATCHLIST_SUCCESS,
      payload: response.data,
    });
    console.log("user watchlist", response.data);
  } catch (error) { // Corrected missing closing brace for try block
    dispatch({
      type: types.GET_USER_WATCHLIST_FAILURE,
      error: error.message,
    });
  }
};

export const addItemToWatchlist = ({coinId , jwt}) => async (dispatch) => {
  dispatch({ type: types.ADD_COIN_TO_WATCHLIST_REQUEST });
  try {
    const response = await api.patch(`/api/watchlist/add/coin/${coinId}`, {} , {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch({
      type: types.ADD_COIN_TO_WATCHLIST_SUCCESS, // Fixed the spacing issue
      payload: response.data,
    });
    console.log("coin added to watchlist", response.data);
  } catch (error) { // Removed stray `I`
    console.log("error", error);
    dispatch({
      type: types.ADD_COIN_TO_WATCHLIST_FAILURE, // Fixed the spacing issue
      error: error.message,
    });
  }
};
