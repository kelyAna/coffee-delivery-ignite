import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div``

export const HeaderSection = styled.header`
  margin-top: 5rem;

  font-family: 'Roboto';
  color: var(--base-header);
  
  font-size: 1.25rem;

  display: flex;
  flex-direction: column;

  span:first-child {
    color: #C47F17;

    font-weight: 800;
    font-size: 2rem;

    font-family: 'Baloo 2';
  }
`

export const OrderConfirmationSection = styled.div`
  width: 32.875rem;
  height: 16.25rem;

  margin-top: 2.5rem;

  text-align: start;

  border: 0.063rem solid #8047F8;
  border-radius: 0.375rem 2.25rem;

  padding: 2.5rem 0rem 0rem 2.5rem;

  .order-info:first-child {
    max-width: 22.125rem;
  }

  .order-info:last-child {
    max-width: 14.625rem;
  }

  .order-info {
    max-width: 11.563rem;
  }
`
export const OrderInfoSection = styled.div`
  display: flex;

  gap: 6.375rem;
`

export const OrderInfoSectionLine = styled.div`
  display: flex;

  gap: 0.75rem;
`


