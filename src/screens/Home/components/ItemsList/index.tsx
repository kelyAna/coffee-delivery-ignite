import { ItemCard } from './components/ItemCard';
import { ItemCardContainerHeader } from './components/ItemCard/styles';
import { ItemsSectionContainer, ItemList } from './styles';

import { CartContext, CoffeProps } from '../../../../contexts/CartContext';
import { useContext, useState } from 'react';

export const ItemsList = () => {
  const { addItemToCart, items, removeItemFromCart, cart } =
    useContext(CartContext)

  const [itemsQuantity, setItemsQuantity] = useState(0)
  let arrCart = []

  for (var j = 0; j < cart.length; j++) {
    arrCart.push(cart[j].item)
  }

  const addItemToCartClick = (coffe: CoffeProps) => {
    setItemsQuantity(itemsQuantity + 1)

    addItemToCart(coffe)
  }

  return (
    <ItemsSectionContainer>
      <ItemCardContainerHeader>Nossos cafés</ItemCardContainerHeader>
      <ItemList>
        {items.map((coffee) => {
          return (
            <ItemCard
              key={coffee.id}
              imgSRC={coffee.imgSRC}
              tags={coffee.tags}
              name={coffee.name}
              description={coffee.description}
              price={itemsQuantity * 9.90}
              increaseQuantity={() => addItemToCartClick(coffee)}
              decreaseQuantity={() => removeItemFromCart.bind(coffee.id)}
            />
          );
        })}
      </ItemList>
    </ItemsSectionContainer>
  );
};
