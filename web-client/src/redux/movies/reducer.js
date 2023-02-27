import MoviesActionsTypes from "./actions-types";

const initialState = {
  data: {},
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case MoviesActionsTypes.FETCH:
      return {
        ...state,
        data: action.payload,
      };

    case MoviesActionsTypes.CLEAR:
      return {
        ...state,
        data: {},
      };

    default:
      return state;
  }
};

export default moviesReducer;
