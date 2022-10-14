import styled from 'styled-components'

export const CounterContainer = styled.div`
  align-items: center;

  justify-content: space-between;
  display: flex;

  background-color: var(--gray-200);
  border-radius: 6px;
  padding: 0.5rem;

  gap: 0.25rem;
`

export const CounterButton = styled.button`
  color: var(--purple-300);

  background-color: transparent;
  border: 0;
  cursor: pointer;

  span {
    font-size: 1rem;
  }
`
export const ItemsQuantity = styled.span`
 font-size: 1rem;
 font-weight: 400;
`