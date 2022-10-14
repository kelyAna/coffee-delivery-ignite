import styled from 'styled-components'

interface InputAddressFormProps {
  width?: string
}

export const OrderDataFormContainer = styled.div`
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--base-header);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  span {
    color: var(--base-text);
    font-size: 0.875rem;
  }
`

export const TitleSection = styled.p`
  color: var(--base-header);
  font-size: 1rem;
  margin-bottom: 0.5rem;

  font-family: 'Baloo 2';
  font-weight: 700;
`

export const AddressFormContainer = styled.form`
  align-items: center;
  justify-content: center;
  
  display: flex;
  margin-bottom: 0.75rem;
`

export const AddressForm = styled.form`
  background: var(--gray-100);
  border-radius: 0.375rem;

  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  gap: 2rem;

  width: 600px;
`

export const InputAddressForm = styled.textarea<InputAddressFormProps>`
  background: #EEEDED;
  border: none;

  border-radius: 0.25rem;
  padding: 0.75rem;

  gap: 1rem;

  width: ${props => props.width ? props.width : '200px'};
  height: 22px;

  resize: none;
`

export const LineForm = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentForm = styled.div`
  display: flex;
  gap: 0.75rem;

  input {
    opacity: 0;
    position: fixed;
    width: 0;

    width: 178.67px;
    height: 51px;

    text-align: center;
  }

  align-items: center;
  text-align: center;

  label {
    display: flex;
    background-color: var(--gray-200);

    padding: 1rem;

    font-size: 0.75rem;
    border-radius: 4px;

    align-items: center;
    align-content: center;

    width: 178.67px;
    height: 21px;

    color: var(--base-text);;

    img {
      margin: auto 0px auto 0px;
      width: 1rem;
      height: 1rem;
    }

    gap: 0.75rem;
  }

  input[type="radio"]:checked+label{ 
    border: 1px solid var(--purple-300);
    background-color: var(--purple-100);
  } 


  label:hover {
    background-color: #D7D5D5;
  }
`