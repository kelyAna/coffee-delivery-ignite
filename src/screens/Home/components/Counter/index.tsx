import { CounterButton, CounterContainer, ItemsQuantity } from './styles'

export type CounterProps = {
  itemsQuantity: number
  increaseQuantity?: () => void
  decreaseQuantity?: () => void
}

export const Counter = ({
  itemsQuantity,
  decreaseQuantity,
  increaseQuantity,
}: CounterProps) => {
  const disabledMinusButton = itemsQuantity === 0
  return (
    <CounterContainer>
      <CounterButton onClick={decreaseQuantity} disabled={disabledMinusButton}>
        <span>-</span>
      </CounterButton>
      <ItemsQuantity>{itemsQuantity}</ItemsQuantity>
      <CounterButton onClick={increaseQuantity}>
        <span>+</span>
      </CounterButton>
    </CounterContainer>
  )
}
