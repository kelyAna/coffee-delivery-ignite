import { ItemCard } from './components/ItemCard';
import { ItemCardContainerHeader } from './components/ItemCard/styles';
import { ItemsSectionContainer, ItemList } from './styles';

import { CartContext } from '../../../../contexts/CartContext';
import { useContext } from 'react';

export const ItemsList = () => {
  const { addItemToCart, items, removeItemFromCart } =
    useContext(CartContext)

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
              price={'9,90'}
              increaseQuantity={() => addItemToCart(coffee)}
              decreaseQuantity={() => removeItemFromCart.bind(coffee.id)}
            />
          );
        })}
      </ItemList>
    </ItemsSectionContainer>
  );
};
