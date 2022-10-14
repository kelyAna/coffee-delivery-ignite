import {
  HeaderSection,
  OrderConfirmationContainer,
  OrderConfirmationSection,
  OrderInfoSection,
  OrderInfoSectionLine,
} from './styles';

import deliveryIcon from '../../assets/delivery.svg';
import localizationIcon from '../../assets/localization-icon.svg';
import timerIcon from '../../assets/timer-icon.svg';
import moneyIcon from '../../assets/money-icon.svg';

export const OrderConfirmation = () => {
  return (
    <OrderConfirmationContainer>
      <HeaderSection>
        <span>Uhu! Pedido confirmado</span>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </HeaderSection>
      <OrderInfoSection>
        <OrderConfirmationSection>
          <OrderInfoSectionLine className="order-info">
            <img src={localizationIcon} alt="" />

            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> Farrapos - Porto
              Alegre, RS
            </p>
          </OrderInfoSectionLine>

          <OrderInfoSectionLine className="order-info">
            <img src={timerIcon} alt="" />
            <p>
              Previsão de entrega <b>20 min - 30 min</b>
            </p>
          </OrderInfoSectionLine>

          <OrderInfoSectionLine className="order-info">
            <img src={moneyIcon} alt="" />
            <p>
              Pagamento na entrega <b>Cartão de Crédito</b>
            </p>
          </OrderInfoSectionLine>
        </OrderConfirmationSection>
        <img src={deliveryIcon} alt="" />
      </OrderInfoSection>
    </OrderConfirmationContainer>
  );
};
