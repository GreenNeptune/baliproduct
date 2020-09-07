import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_PRODUCT_QUANTITY_IN_CART } from "./actionTypes"

export const addProductToCart = product => dispatch => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: product
  });
}

export const removeProductFromCart = id => dispatch => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id
  });
}

export const updateProductQuantity = (id, newQuantity) => dispatch => {
  dispatch({
    type: UPDATE_PRODUCT_QUANTITY_IN_CART,
    payload: {
      newQuantity,
      id,
    }
  });
}