import { ItemCard } from './components/ItemCard'
import { ItemCardContainerHeader } from './components/ItemCard/styles'
import { ItemsSectionContainer, ItemList } from './styles'

import {
  CartContext,
  CoffeCardProps,
  CoffeProps,
} from '../../../../contexts/CartContext'
import { useContext } from 'react'

export const ItemsList = () => {
  const { addItemToCart, items, removeItemFromCart, cart } =
    useContext(CartContext)

  let arrCart: CoffeCardProps[] = []

  for (var j = 0; j < cart?.length; j++) {
    arrCart.push(cart[j])
  }

  function getCart() {
    const carrinho = localStorage.getItem('@coffe-delivery')

    return carrinho ? JSON.parse(carrinho) : []
  }

  const c = getCart

  console.log(c)

  const addItemToCartClick = (coffe: CoffeProps) => {
    coffe.quantity++
    addItemToCart(coffe)
  };

  const removeItemFromCartClick = (coffe: CoffeProps) => {
    coffe.quantity--
    removeItemFromCart(coffe.id)
  };

  return (
    <ItemsSectionContainer>
      <ItemCardContainerHeader>Nossos cafés</ItemCardContainerHeader>
      <ItemList>
        {items.map((coffee) => {
          console.log(coffee.quantity)
          return (
            <ItemCard
              key={coffee.id}
              imgSRC={coffee.imgSRC}
              tags={coffee.tags}
              name={coffee.name}
              description={coffee.description}
              price={(coffee.quantity * 9.9).toFixed(2)}
              increaseQuantity={() => addItemToCartClick(coffee)}
              decreaseQuantity={() => removeItemFromCartClick(coffee)}
              itemsQuantity={coffee.quantity}
              disabled={coffee.quantity === 1}
            />
          );
        })}
      </ItemList>
    </ItemsSectionContainer>
  );
};
