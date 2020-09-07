import { GET_PRODUCTS, FILTER_PRODUCTS_BY_TITLE } from "./actionType";
import api from "../../../utils/api";


export const getProducts = () => async dispatch => {
  const res = await api.get('/products');
  const products = res.data;
  dispatch({
    type: GET_PRODUCTS,
    payload: products
  })
}
export const filterProductsByTitle = (text) => {
  return {
    type: FILTER_PRODUCTS_BY_TITLE,
    payload: text
  }
}