import {
  GET_COLLECTIONS,
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  SET_LOADING,
  GET_CART_PRODUCTS,
} from "../actions/types";

const initialState = {
  collections: null,
  products: null,
  selected: null,
  loading: false,
  error: null,
  cart: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
        loading: false
      }

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCT:
      return {
        ...state,
        selected: state.products.find((p) => p.en_name === action.payload ? p : console.log()),
        loading: false,
      };
      
    case GET_CART_PRODUCTS:
      return {
        ...state,
        cart: action.payload,
        loading: false
      }

    default:
      return state;
  }
};
