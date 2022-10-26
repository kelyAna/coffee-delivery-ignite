import { CoffeProps } from "../../contexts/CartContext"
import { ActionTypes } from "./actions"

const removeProductFromCart = (productId: string, state: any) => {
  const updatedCart = [...state.cart]
  let arrCart: any[] = []

  for (var j = 0; j < updatedCart.length; j++) {
    arrCart.push(updatedCart[j].item)
  }

  Object.values(productId).map((itemId) => productId = itemId)

  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId)

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  }

  updatedCart.splice(updatedItemIndex, 1)

  updatedCart[updatedItemIndex] = updatedItem
  
  return { ...state, cart: updatedCart }
}

const addProductToCart = (product: CoffeProps, state: any) => {
  const updatedCart = [...state.cart];

  updatedCart.push({ ...product })
  
  return { ...state, cart: updatedCart }
}

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return addProductToCart(action.payload, state)
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return removeProductFromCart(action.payload, state)
    default:
      return state
  }
}