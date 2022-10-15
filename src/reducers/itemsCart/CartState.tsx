import { ReactNode, useReducer } from "react"
import { CartContext, CoffeType } from "../../contexts/CartContext"
import { COFFEES } from "../../screens/Home/components/ItemsList/components/ItemCard/utils/coffeList"
import { ActionTypes } from "./action"
import { cartReducer } from "./reducer"

type GlobalStateProps = {
  children: ReactNode
}

export const GlobalState = ({ children }: GlobalStateProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, {cart: []})
  const items = COFFEES

  const removeItemFromCart = (itemId: string) => {
    dispatch({
      type: ActionTypes.REMOVE_ITEM_FROM_CART,
      itemId: itemId
    })
  }

  const addItemToCart = (item: CoffeType) => {
    dispatch({ 
      type: ActionTypes.ADD_ITEM_TO_CART,
      item: item
     })
  }

  return (
    <CartContext.Provider
      value={{
        addItemToCart: addItemToCart,
        cart: cartState.cart,
        removeItemFromCart: removeItemFromCart,
        items: items
      }}
    >
      {children}
    </CartContext.Provider>
  )
}