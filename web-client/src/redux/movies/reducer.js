import MoviesActionsTypes from "./actions-types";

const initialState = {
  data: {},
  isLoading: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {

    case MoviesActionsTypes.ACTIVE_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case MoviesActionsTypes.FETCH:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
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
