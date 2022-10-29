import {
  AddressForm,
  AddressFormContainer,
  InputAddressForm,
  LineForm,
  OrderDataFormContainer,
  PaymentForm,
  TitleSection,
} from './styles'

import iconLocalization from './assets/Icon-5.svg'
import creditCardIcon from './assets/Icon-7.svg'
import debitCardIcon from './assets/Icon-8.svg'
import moneyIcon from './assets/Icon-9.svg'

import paymentIcon from './assets/Icon-6.svg'

export const OrderDataForm = () => {
  return (
    <OrderDataFormContainer>
      <TitleSection>Complete seu pedido</TitleSection>

      <AddressFormContainer>
        <AddressForm>
          <div>
            <LineForm>
              <img src={iconLocalization} alt="" />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </LineForm>
          </div>
          <InputAddressForm placeholder="CEP" />
          <InputAddressForm width="580px" placeholder="Rua" />

          <LineForm>
            <InputAddressForm placeholder="Número" />
            <InputAddressForm
              width="348px"
              placeholder="Complemento Opcional"
            />
          </LineForm>

          <LineForm>
            <InputAddressForm placeholder="Bairro" />
            <InputAddressForm placeholder="Cidade" />
            <InputAddressForm width="110px" placeholder="UF" />
          </LineForm>
        </AddressForm>
      </AddressFormContainer>

      <AddressFormContainer>
        <AddressForm>
          <div>
            <LineForm>
              <img src={paymentIcon} alt="" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </LineForm>
          </div>
          <PaymentForm>
            <input
              type="radio"
              id="radioCreditCard"
              name="radio"
              value="radioCreditCard"
            />
            <label htmlFor="radioCreditCard">
              <img src={creditCardIcon} alt="" /> CARTÃO DE CRÉDITO
            </label>

            <input
              type="radio"
              id="radioDebitCard"
              name="radio"
              value="radioDebitCard"
            />
            <label htmlFor="radioDebitCard">
              <img src={debitCardIcon} alt="" /> CARTÃO DE DÉBITO
            </label>

            <input
              type="radio"
              id="radioMoney"
              name="radio"
              value="radioMoney"
            />
            <label htmlFor="radioMoney">
              <img src={moneyIcon} alt="" />
              DINHEIRO
            </label>
          </PaymentForm>
        </AddressForm>
      </AddressFormContainer>
    </OrderDataFormContainer>
  )
}
