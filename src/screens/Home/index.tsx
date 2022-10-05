import { IntroSection } from "./components/IntroSection"
import { ItemsList } from "./components/ItemsList"
import { HomeContainer } from "./styles"

export const Home = () => {
  return (
    <HomeContainer>
      <IntroSection />
      <ItemsList />
    </HomeContainer>
  )
}