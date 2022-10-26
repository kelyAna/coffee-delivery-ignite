import { Counter } from '../../../Home/components/Counter';
import { TitleSection } from '../OrderDataForm/styles';
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
} from './styles';

import trashIcon from './assets/trash.svg';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../../../contexts/CartContext';

export const SelectedItemsList = () => {
  const { cart, removeItemFromCart } = useContext(CartContext);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  let arrCart = [];

  for (var j = 0; j < cart.length; j++) {
    arrCart.push(cart[j].item);
  }

  return (
    <SelectedItemsListContainer>
      <TitleSection>Cafés selecionados</TitleSection>
      <CoffeeCard>
        <>
          {arrCart.map((item) => {
            return (
              <div key={item?.id}>
                <CoffeeSelected>
                  <CoffeeImage src={item?.imgSRC} alt="" />
                  <div>
                    <CoffeeCardHeader>
                      <p>{item?.name}</p>
                      <h4>R$ 9,90</h4>
                    </CoffeeCardHeader>
                    <Actions>
                      <Counter itemsQuantity={itemsQuantity} />
                      <TrashButton onClick={() => removeItemFromCart(item?.id)}>
                        <img src={trashIcon} alt="" />
                        REMOVER
                      </TrashButton>
                    </Actions>
                  </div>
                </CoffeeSelected>
                <Divider />
              </div>
            );
          })}
        </>
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
  );
};
