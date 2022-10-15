import { Coffe } from "../../contexts/CartContext"
import { ActionTypes } from "./action"

export const counter = {
  counter: 0
}

const addProductToCart = (item: Coffe, state: any) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === item.id
  )

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...item, quantity: 1 })
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    }
    updatedItem.quantity++
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, cart: updatedCart }
}

const removeProductFromCart = (productId: string, state: any) => {
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId)

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  }
  updatedItem.quantity--
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1)
  } else {
    updatedCart[updatedItemIndex] = updatedItem
  }
  return { ...state, cart: updatedCart }
}

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return addProductToCart(action.product, state)
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return removeProductFromCart(action.productId, state)
    default:
      return state
  }
}