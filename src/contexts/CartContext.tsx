import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'

import coffeeImg1 from '../assets/Image.svg'
import coffeeImg2 from '../assets/Image-5.svg'
import coffeeImg3 from '../assets/Image-9.svg'
import coffeeImg4 from '../assets/Image-12.svg'
import coffeeImg5 from '../assets/Image-2.svg'
import coffeeImg6 from '../assets/Image-6.svg'
import coffeeImg7 from '../assets/Image-10.svg'
import coffeeImg8 from '../assets/Image-13.svg'
import coffeeImg9 from '../assets/Image-3.svg'
import coffeeImg10 from '../assets/Image-7.svg'
import coffeeImg11 from '../assets/Image-11.svg'
import coffeeImg12 from '../assets/Image-14.svg'
import coffeeImg13 from '../assets/Image-4.svg'
import coffeeImg14 from '../assets/Image-8.svg'
import { cartReducer } from '../reducers/itemsCart/reducer'
import {
  addProductToCartAction,
  removeProductFromCart,
} from '../reducers/itemsCart/actions'

export const COFFEES = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    imgSRC: coffeeImg1,
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['TRADICIONAL'],
    quantity: 0
  },
  {
    id: '2',
    name: 'Expresso Americano',
    imgSRC: coffeeImg2,
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['TRADICIONAL'],
    quantity: 0
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    imgSRC: coffeeImg3,
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['TRADICIONAL'],
    quantity: 0
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    imgSRC: coffeeImg4,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['TRADICIONAL', 'GELADO'],
    quantity: 0
  },
  {
    id: '5',
    name: 'Café com Leite',
    imgSRC: coffeeImg5,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['TRADICIONAL', 'COM LEITE'],
    quantity: 0
  },
  {
    id: '6',
    name: 'Latte',
    imgSRC: coffeeImg6,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['TRADICIONAL', 'COM LEITE'],
    quantity: 0
  },
  {
    id: '90',
    name: 'Capuccino',
    imgSRC: coffeeImg7,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    quantity: 0
  },
  {
    id: '8',
    name: 'Macchiato',
    imgSRC: coffeeImg8,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    quantity: 0
  },
  {
    id: '9',
    name: 'Mocaccino',
    imgSRC: coffeeImg9,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['TRADICIONAL', 'COM LEITE'],
    quantity: 0
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    imgSRC: coffeeImg10,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['ESPECIAL', 'COM LEITE'],
    quantity: 0
  },
  {
    id: '11',
    name: 'Cubano',
    imgSRC: coffeeImg11,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    quantity: 0
  },
  {
    id: '12',
    name: 'Havaiano',
    imgSRC: coffeeImg12,
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['ESPECIAL'],
    quantity: 0
  },
  {
    id: '13',
    name: 'Árabe',
    imgSRC: coffeeImg13,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['ESPECIAL'],
    quantity: 0
  },
  {
    id: '14',
    name: 'Irlandês',
    imgSRC: coffeeImg14,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    quantity: 0
  },
]

export type CoffeProps = {
  id: string
  name: string
  imgSRC: string
  description: string
  tags: string[]
  quantity: number
}

export type CoffeCardProps = {
  item: CoffeProps
  quantity: number
}

interface CartContextProps {
  items: CoffeProps[]
  cart: CoffeCardProps[]
  addItemToCart: (item: CoffeProps) => void
  removeItemFromCart: (itemId: string) => void
}

export const CartContext = createContext({} as CartContextProps)

type CartContextProviderProps = {
  children: ReactNode
}

const cartInitialState = localStorage.getItem('@coffe-delivery')

export const initialState = {
  cart: cartInitialState !== null ? JSON.parse(cartInitialState) : []
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState)
 
  const items = COFFEES

  const removeItemFromCart = (itemId: string) => {
    dispatch(removeProductFromCart(itemId))
  }

  const addItemToCart = (item: CoffeProps) => {
    dispatch(addProductToCartAction(item))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState.cart)

    localStorage.setItem('@coffe-delivery', stateJSON)
  }, [cartState.cart])

  return (
    <CartContext.Provider
      value={{
        addItemToCart: addItemToCart,
        cart: cartState.cart,
        removeItemFromCart: removeItemFromCart,
        items: items,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
