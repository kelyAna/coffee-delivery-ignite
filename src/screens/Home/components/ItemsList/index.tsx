import { ItemCard } from './components/ItemCard'
import { ItemCardContainerHeader } from './components/ItemCard/styles'
import { ItemsSectionContainer, ItemList } from './styles'

import { CartContext } from '../../../../contexts/CartContext'

export const ItemsList = () => {
  return (
    <CartContext.Consumer>
      {(context) => (
        <ItemsSectionContainer>
          <ItemCardContainerHeader>Nossos cafés</ItemCardContainerHeader>
          <ItemList>
            {context.items.map((coffee) => {
              return (
                <ItemCard
                  imgSRC={coffee.imgSRC}
                  tags={coffee.tags}
                  name={coffee.name}
                  description={coffee.description}
                  price={'9,90'}
                  increaseQuantity={context.addItemToCart.bind(this, coffee)}
                  decreaseQuantity={context.removeItemFromCart.bind(this, coffee.id)}
                />
              )
            })}
          </ItemList>
        </ItemsSectionContainer>
      )}
    </CartContext.Consumer>
  )
}
