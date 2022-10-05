import { OrderDataForm } from "./components/OrderDataForm"
import { SelectedItemsList } from "./components/SelectedItemsList"
import { CheckoutContainer } from "./styles"

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <OrderDataForm />
      <SelectedItemsList />
    </CheckoutContainer>
  )
}