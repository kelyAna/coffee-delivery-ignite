import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;
  }
`

export const HeaderLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;
  padding: 0.625rem;
  border-radius: 6px;
  
  font-size: 0.875rem;
  color: var(--purple-400);
  background-color: var(--purple-100);
`

export const CartButtonContainer = styled.div`
  padding: 0.625rem;
  border-radius: 6px;
  
  font-size: 0.875rem;
  background-color: var(--yellow-100);
`