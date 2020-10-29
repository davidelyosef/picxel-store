import {
  GET_COLLECTIONS,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  SET_LOADING,
  GET_PRODUCT,
  GET_CART_PRODUCTS,
  DELETE_CART_PRODUCT,
} from "./types";
import axios from "axios";

// Get Collections
export const getCollections = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('/api/collections');

    dispatch({
      type: GET_COLLECTIONS,
      payload: res.data
    })

  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
}

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

// Get cart products
export const getCartProducts = () => async (dispatch) => {
  try {
    setLoading();
    
    const products = await (await axios.get("/api/products")).data;
    const cart = localStorage.getItem('cart')
    const parseCart = JSON.parse(cart);
    let res = [];

    parseCart.map((cartItem) => {
      products.map((product) => {
          return cartItem._id === product._id
          ? res.push({
            ...product,
            quantity: cartItem.quantity
          })
          : "";
      });
    });
    
    dispatch({
      type: GET_CART_PRODUCTS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

export const deleteCartProduct = (cart, _id) => async (dispatch) => {
  try {
    const index = cart.findIndex(item => item._id === _id ? true : false);
    cart.splice(index, 1);

    // Delete on local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    dispatch({
      type: DELETE_CART_PRODUCT,
      payload: cart,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
