import {
  GET_RECIPES_STARTED,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILED,
  GET_RECIPES_NOTSTARTED,
} from "../types/types";
import fetchRecipe from "../../api/recipeApi";

export const getAllRECIPES = (values) => {
  return (dispatch) => {
    dispatch({ type: GET_RECIPES_STARTED, payload: false });

    fetchRecipe(values)
      .then((res) => {
        // console.log("===9999",res)
        dispatch({ type: GET_RECIPES_SUCCESS, payload: res.hits });
      })
      .catch((error) => {
        if (error.name === "ServerError") {
          dispatch({ type: GET_RECIPES_FAILED, payload: error.message });
          dispatch({ type: GET_RECIPES_NOTSTARTED, payload: false });
        } else if (error.name === "GET_RECIPESError") {
          dispatch({ type: GET_RECIPES_FAILED, payload: error.message });
          dispatch({ type: GET_RECIPES_NOTSTARTED, payload: false });
        } else {
          dispatch({ type: GET_RECIPES_FAILED, payload: error.message });
          dispatch({ type: GET_RECIPES_NOTSTARTED, payload: false });
        }
      });
  };
};
