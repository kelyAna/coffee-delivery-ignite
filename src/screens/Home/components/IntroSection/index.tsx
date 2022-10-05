import { HeaderSection, IntroSectionContainer, Item, ItemSection, ItemsSection, TitleSection } from "./styles"

import coffeImage from '../../../../assets/coffee-image.svg'
import itemSectionIcon1 from '../../../../assets/item-section-icon-1.svg'
import itemSectionIcon2 from '../../../../assets/item-section-icon-2.svg'
import itemSectionIcon3 from '../../../../assets/item-section-icon-3.svg'
import itemSectionIcon4 from '../../../../assets/item-section-icon-4.svg'

export const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <HeaderSection>
        <TitleSection>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </TitleSection>

        <ItemsSection>
          <ItemSection>
            <Item>
              <img src={itemSectionIcon1} alt="" />
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <img src={itemSectionIcon2} alt="" />
              <span>Entrega rápida e rastreada</span>
            </Item>
          </ItemSection>
         <ItemSection>
            <Item>
              <img src={itemSectionIcon3} alt="" />
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item>
              <img src={itemSectionIcon4} alt="" />
              <span>O café chega fresquinho até você</span>
            </Item>
         </ItemSection>
        </ItemsSection>
      </HeaderSection>
      <img src={coffeImage} />
    </IntroSectionContainer>
  )
}