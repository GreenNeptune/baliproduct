import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, UPDATE_PRODUCT_QUANTITY_IN_CART } from "./actionTypes";
import { addProductToCart } from "./cart.utils";


const initialState = {
  products: [],

}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: addProductToCart([...state.products], action.payload),
      }
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: [...state.products].filter(product => product._id !== action.payload)
      }
    case UPDATE_PRODUCT_QUANTITY_IN_CART:
      return {
        ...state,
        products: [...state.products].map(product => product._id === action.payload.id
          ? { ...product, quantity: action.payload.newQuantity }
          : product
        )
      }
    default:
      return state
  }
}