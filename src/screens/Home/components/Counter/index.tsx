import { CounterButton, CounterContainer, ItemsQuantity } from "./styles"

export type CounterProps = {
  itemsQuantity: number
}

export const Counter = ({itemsQuantity}: CounterProps) => {
  return (
    <CounterContainer>
      <CounterButton>
        <span>-</span>
      </CounterButton>
      <ItemsQuantity>{itemsQuantity}</ItemsQuantity>
      <CounterButton>
        <span>+</span>
      </CounterButton>
    </CounterContainer>
  )
}