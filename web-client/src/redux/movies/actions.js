import MoviesActionsTypes from "./actions-types";

export const fetchData = (p) => {
  return {
    type: MoviesActionsTypes.FETCH,
    payload: p,
  };
};

export const clearData = () => {
  return {
    type: MoviesActionsTypes.CLEAR,
  };
};
