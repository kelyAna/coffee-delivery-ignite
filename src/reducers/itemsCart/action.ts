export enum ActionTypes {
  INCREASE_QUANTITY_OF_ITEMS = 'INCREASE_QUANTITY_OF_ITEMS',
  DECREASE_QUANTITY_OF_ITEMS = 'INCREASE_QUANTITY_OF_ITEMS',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
}

export const increaseQuantity = () => {
  return {
    type: ActionTypes.DECREASE_QUANTITY_OF_ITEMS,
  }
}

export const decreaseQuantity = () => {
  return {
    type: ActionTypes.INCREASE_QUANTITY_OF_ITEMS,
  }
}

export const removeItemFromCart = () => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
  }
}