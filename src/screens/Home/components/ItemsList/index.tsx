import { ItemCard } from "./components/ItemCard"
import { ItemCardContainerHeader } from "./components/ItemCard/styles"
import { ItemsSectionContainer, ItemList } from "./styles"

import { COFFEES } from './components/ItemCard/utils/coffeList'

export const ItemsList = () => {
  return (
    <ItemsSectionContainer>
      <ItemCardContainerHeader>Nossos cafés</ItemCardContainerHeader>
      <ItemList>
        {COFFEES.map((caffee) => {
          return (
            <ItemCard 
              imgSRC={caffee.imgSRC} 
              tags={caffee.tags} 
              name={caffee.name} 
              description={caffee.description} 
              price={"9,90"} 
              itemsQuantity={0}
            />
          )
        })}
      </ItemList>
    </ItemsSectionContainer>
  )
}