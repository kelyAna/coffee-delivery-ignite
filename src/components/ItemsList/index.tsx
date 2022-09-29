import { ItemCard } from "./components/ItemCard"
import { ItemCardContainerHeader } from "./components/ItemCard/styles"
import { ItemsSectionContainer, ItemList } from "./styles"

import coffe from '../../assets/first-coffee.svg'

export const ItemsList = () => {
  return (
    <ItemsSectionContainer>
      <ItemCardContainerHeader>Nossos cafés</ItemCardContainerHeader>
      <ItemList>
        <ItemCard 
          imgSRC={coffe} 
          tags={["Tradicional"]} 
          name={"Expresso Tradicional"} 
          description={"O tradicional café feito com água quente e grãos moídos"} 
          price={"9,90"} 
          itemsQuantity={0}
        />
      </ItemList>
    </ItemsSectionContainer>
  )
}