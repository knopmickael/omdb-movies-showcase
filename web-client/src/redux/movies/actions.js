import MoviesActionsTypes from "./actions-types";
import axios from "axios";

export const activeIsLoading = () => ({ type: MoviesActionsTypes.ACTIVE_IS_LOADING });

export const fetchData = (p) => {
  return (dispatch) => {
    axios.get(`http://localhost:5000/movies/search?title=${p}`)
      .then(res => {
        dispatch({
          type: MoviesActionsTypes.FETCH,
          payload: res.data.data,
        });
      })
      .catch(e => console.log('Error: ' + e.message));
  };
};

export const clearData = () => ({ type: MoviesActionsTypes.CLEAR });
