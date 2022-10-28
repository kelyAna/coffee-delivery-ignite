import { CoffeProps } from "../../contexts/CartContext"

export enum ActionTypes {
  INCREASE_QUANTITY_OF_ITEMS = 'INCREASE_QUANTITY_OF_ITEMS',
  DECREASE_QUANTITY_OF_ITEMS = 'INCREASE_QUANTITY_OF_ITEMS',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
}

export const addProductToCartAction = (item: CoffeProps) => {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    }
  }
}

export const removeProductFromCart = (itemId: string) => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId
    }
  }
}