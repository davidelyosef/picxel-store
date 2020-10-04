import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  SET_LOADING,
  GET_PRODUCT,
} from "./types";
import axios from "axios";

// Get Products
export const getProducts = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get("/api/products");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: err,
    });
  }
};

// Get one product
export const getProduct = (name) => async (dispatch) => {
  try {
    setLoading();

    dispatch({
      type: GET_PRODUCT,
      payload: name,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
