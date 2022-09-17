import { IntroSectionContainer, ItemsSection, TitleSection } from "./styles"

import coffeImage from '../../assets/coffee-image.svg'

export const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <TitleSection>
        <p>Encontre o café perfeito para qualquer hora do dia</p>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

        <ItemsSection>
          <div>
            
          </div>
        </ItemsSection>
      </TitleSection>
      <img src={coffeImage} />
    </IntroSectionContainer>
  )
}