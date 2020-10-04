import {
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  products: null,
  selected: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
        selected: state.products.find((p) => {
          if (p.en_name === action.payload) return p;
        }),
        loading: false,
      };

    default:
      return state;
  }
};
