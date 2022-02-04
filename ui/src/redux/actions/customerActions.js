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
import { all, create, update, Delete } from "../../api/customerApi";

export const allCustomers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CUSTOMERS_REQUEST });
    const { data } = await all();
    dispatch({ type: ALL_CUSTOMERS_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: ALL_CUSTOMERS_FAILURE, payload: err.response.data.message });
  }
};

export const createCustomers = (customer) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CUSTOMERS_REQUEST });
    const { data } = await create(customer);
    dispatch({ type: CREATE_CUSTOMERS_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: CREATE_CUSTOMERS_FAILURE, payload: err.response.data.message });
  }
};

export const updateCustomers = (customer) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CUSTOMERS_REQUEST });
    const { data } = await update(customer, customer.id);
    dispatch({ type: UPDATE_CUSTOMERS_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: UPDATE_CUSTOMERS_FAILURE, payload: err.response.data.message });
  }
};

export const deleteCustomer = (customer) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CUSTOMERS_REQUEST });
    await Delete(customer.id);
    dispatch({ type: DELETE_CUSTOMERS_SUCCESS, payload: customer });
  } catch (err) {
    dispatch({ type: DELETE_CUSTOMERS_FAILURE, payload: err.response.data.message });
  }
};
