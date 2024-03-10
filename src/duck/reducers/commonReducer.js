import {
  GET_RECIPES_STARTED,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILED,
  GET_RECIPES_NOTSTARTED,
} from "../types/types";

export const loadState = {
  NOTSTARTED: "NOTSTARTED",
  STARTED: "STARTED",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
};

const initialState = {
  error: "",
  recipes: [],
  apiError: false,
  getRecipesLoadState: loadState.NOTSTARTED,
};

export const IAppState = {
  error: "",
  recipes: [],
  apiError: false,
  getRecipesLoadState: loadState.NOTSTARTED,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    // Use action types directly in switch cases
    case GET_RECIPES_STARTED:
      return {
        ...state,
        getRecipesLoadState: loadState.STARTED,
        apiError: false,
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        getRecipesLoadState: loadState.SUCCESS,
        recipes: action.payload,
        apiError: false,
      };
    case GET_RECIPES_FAILED:
      return {
        ...state,
        getRecipesLoadState: loadState.FAILED,
        apiError: true,
        error: action.payload,
      };
    case GET_RECIPES_NOTSTARTED:
      return {
        ...state,
        getRecipesLoadState: loadState.NOTSTARTED,
      };

    default:
      return state;
  }
};

export default commonReducer;
