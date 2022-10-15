import { Counter } from '../../../Home/components/Counter'
import { TitleSection } from '../OrderDataForm/styles'
import {
  Actions,
  CoffeeCard,
  CoffeeCardHeader,
  CoffeeImage,
  CoffeeSelected,
  ConfirmButton,
  Divider,
  OrderLineSection,
  OrderTotalSection,
  SelectedItemsListContainer,
  TrashButton,
} from './styles'

import img from '../../../../assets/Image-2.svg'
import trashIcon from './assets/trash.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
export const SelectedItemsList = () => {
  const [itemsQuantity, setItemsQuantity] = useState(0)

  const handleIncreaseQuantityOfItemsClick = () => {
    setItemsQuantity(itemsQuantity + 1)
  }

  const handleDecreaseQuantityOfItemsClick = () => {
    setItemsQuantity(itemsQuantity - 1)
  }
  return (
    <SelectedItemsListContainer>
      <TitleSection>Cafés selecionados</TitleSection>
      <CoffeeCard>
        <CoffeeSelected>
          <CoffeeImage src={img} alt="" />
          <div>
            <CoffeeCardHeader>
              <p>Expresso Tradicional</p>
              <h4>R$ 9,90</h4>
            </CoffeeCardHeader>
            <Actions>
              <Counter
                itemsQuantity={itemsQuantity}
                increaseQuantity={handleIncreaseQuantityOfItemsClick}
                decreaseQuantity={handleDecreaseQuantityOfItemsClick}
              />
              <TrashButton>
                <img src={trashIcon} alt="" />
                REMOVER
              </TrashButton>
            </Actions>
          </div>
        </CoffeeSelected>
        <Divider />
        <CoffeeSelected>
          <CoffeeImage src={img} alt="" />
          <div>
            <CoffeeCardHeader>
              <p>Expresso Tradicional</p>
              <h4>R$ 9,90</h4>
            </CoffeeCardHeader>
            <Actions>
              <Counter
                itemsQuantity={itemsQuantity}
                increaseQuantity={handleIncreaseQuantityOfItemsClick}
                decreaseQuantity={handleDecreaseQuantityOfItemsClick}
              />
              <TrashButton>
                <img src={trashIcon} alt="" />
                REMOVER
              </TrashButton>
            </Actions>
          </div>
        </CoffeeSelected>
        <Divider />
        <OrderTotalSection>
          <OrderLineSection>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </OrderLineSection>
          <OrderLineSection>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </OrderLineSection>
          <OrderLineSection>
            <span>Total</span>
            <span>R$ 33,20</span>
          </OrderLineSection>
        </OrderTotalSection>
        <NavLink to="/order-confirmation">
          <ConfirmButton>
            <span>CONFIRMAR PEDIDO</span>
          </ConfirmButton>
        </NavLink>
      </CoffeeCard>
    </SelectedItemsListContainer>
  )
}
