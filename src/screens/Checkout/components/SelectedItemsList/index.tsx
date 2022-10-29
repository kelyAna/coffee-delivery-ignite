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

import trashIcon from './assets/trash.svg'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext, CoffeCardProps } from '../../../../contexts/CartContext'

export const SelectedItemsList = () => {
  const { cart, addItemToCart, removeItemFromCart } = useContext(CartContext)
  let arrCart = []

  for (var j = 0; j < cart.length; j++) {
    arrCart.push(cart[j])
  }

  const totalOfItems = arrCart.reduce((soma, item) => item.quantity * 9.9, 0)
  const totalCart = totalOfItems + 3.50

  const addItemToCartClick = (coffe: CoffeCardProps) => {
    coffe.item.quantity++
    addItemToCart(coffe.item)
  }

  const removeItemFromCartClick = (coffe: CoffeCardProps) => {
    coffe.item.quantity--
    addItemToCart(coffe.item)
  }

  return (
    <SelectedItemsListContainer>
      <TitleSection>Cafés selecionados</TitleSection>
      <CoffeeCard>
        <>
          {arrCart.map((item) => {
            return (
              <>
                <CoffeeSelected key={item?.item.id}>
                  <CoffeeImage src={item?.item.imgSRC} alt="" />
                  <div>
                    <CoffeeCardHeader>
                      <p>{item?.item.name}</p>
                      <h4>R$ {(item.quantity * 9.9).toFixed(2)} </h4>
                    </CoffeeCardHeader>
                    <Actions>
                      <Counter
                        disabled={item.item.quantity === 1}
                        itemsQuantity={item.item.quantity}
                        increaseQuantity={() => addItemToCartClick(item)}
                        decreaseQuantity={() => removeItemFromCartClick(item)}
                      />
                      <TrashButton
                        onClick={() => removeItemFromCart(item?.item.id)}
                      >
                        <img src={trashIcon} alt="" />
                        REMOVER
                      </TrashButton>
                    </Actions>
                  </div>
                </CoffeeSelected>
                <Divider />
              </>
            );
          })}
        </>
        <OrderTotalSection>
          <OrderLineSection>
            <span>Total de itens</span>
            <span>R$ {totalOfItems.toFixed(2)}</span>
          </OrderLineSection>
          <OrderLineSection>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </OrderLineSection>
          <OrderLineSection>
            <span>Total</span>
            <span>R$ {totalCart.toFixed(2)} </span>
          </OrderLineSection>
        </OrderTotalSection>
        <NavLink to="/order-confirmation">
          <ConfirmButton>
            <span>CONFIRMAR PEDIDO</span>
          </ConfirmButton>
        </NavLink>
      </CoffeeCard>
    </SelectedItemsListContainer>
  );
};
