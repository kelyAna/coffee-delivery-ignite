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

export const CartLength = styled.div`
  background-color: #C47F17;

  border-radius: 1000px;

  text-align: center;
  letter-spacing: -0.06em;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  padding: 0px;

  position: absolute;

  width: 20px;
  height: 20px;

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;

  bottom: 815px;
  margin-left: 15px;

  color: white;
`