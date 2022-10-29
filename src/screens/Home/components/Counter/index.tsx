import { CounterButton, CounterContainer, ItemsQuantity } from './styles'

export type CounterProps = {
  itemsQuantity: number
  increaseQuantity?: () => void
  decreaseQuantity?: () => void
  disabled: boolean
}

export const Counter = ({
  itemsQuantity,
  decreaseQuantity,
  increaseQuantity,
  disabled
}: CounterProps) => {
  return (
    <CounterContainer>
      <CounterButton onClick={decreaseQuantity} disabled={disabled}>
        <span>-</span>
      </CounterButton>
      <ItemsQuantity>{itemsQuantity}</ItemsQuantity>
      <CounterButton onClick={increaseQuantity}>
        <span>+</span>
      </CounterButton>
    </CounterContainer>
  )
}
