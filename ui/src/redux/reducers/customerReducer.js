import {
  ALL_CUSTOMERS_REQUEST,
  ALL_CUSTOMERS_SUCCESS,
  ALL_CUSTOMERS_FAILURE,
  CREATE_CUSTOMERS_SUCCESS,
  CREATE_CUSTOMERS_REQUEST,
  CREATE_CUSTOMERS_FAILURE,
  UPDATE_CUSTOMERS_REQUEST,
  UPDATE_CUSTOMERS_SUCCESS,
  UPDATE_CUSTOMERS_FAILURE,
  DELETE_CUSTOMERS_REQUEST,
  DELETE_CUSTOMERS_SUCCESS,
  DELETE_CUSTOMERS_FAILURE,
  CLEAR_ERRORS,
} from "../constants";
import initialState from "../initialState";

export const customerReducer = (state = initialState.customers, action) => {
  // get all information
  if (action.type === ALL_CUSTOMERS_REQUEST) return { loading: true, data: [] };
  if (action.type === ALL_CUSTOMERS_SUCCESS) return { loading: false, data: action.payload };
  if (action.type === ALL_CUSTOMERS_FAILURE) return { loading: false, data: [], error: action.payload };

  // create information
  if (action.type === CREATE_CUSTOMERS_REQUEST) return { loading: true, data: state.data };
  if (action.type === CREATE_CUSTOMERS_SUCCESS)
    return { loading: false, data: [...state.customers.data, { ...action.payload }] };
  if (action.type === CREATE_CUSTOMERS_FAILURE) return { loading: false, data: [], error: action.payload };

  // update information
  if (action.type === UPDATE_CUSTOMERS_REQUEST) return { loading: true, data: state.data };
  if (action.type === UPDATE_CUSTOMERS_SUCCESS)
    return {
      loading: false,
      data: state.map((customer) => (customer.id === action.payload.id ? action.payload : customer)),
    };
  if (action.type === UPDATE_CUSTOMERS_FAILURE) return { loading: false, data: [], error: action.payload };

  // delete information
  if (action.type === DELETE_CUSTOMERS_REQUEST) return { loading: false, data: state.data };
  if (action.type === DELETE_CUSTOMERS_SUCCESS)
    return {
      loading: false,
      data: state.data.filter((customer) => customer.id !== action.payload.id),
    };
  if (action.type === DELETE_CUSTOMERS_FAILURE) return { loading: false, data: [], error: action.payload };

  if (action.type === CLEAR_ERRORS) return { ...state, error: null };

  return state;
};
