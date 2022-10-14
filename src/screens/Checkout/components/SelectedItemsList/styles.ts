import styled from 'styled-components'

export const SelectedItemsListContainer = styled.div`
  width: 300px;
`

export const CoffeeCard = styled.div`
  padding: 2.5rem;
  gap: 1.5rem;

  width: 23rem;
  height: 31.125rem;

  font-family: 'Roboto';

  align-items: center;
  text-align: center;
  justify-content: center;

  background: var(--gray-100);
  border-radius: 6px 44px;
`

export const CoffeeCardHeader = styled.div`
  justify-content: space-between;
  display: flex;

  align-items: center;
  color: var(--base-header);

  h4 {
    margin-left: 60px;
    color: var(--base-text);;
  }
`

export const CoffeeSelected = styled.div`
  align-items: center;
  flex-direction: row;

  display: flex;
  justify-content: center;

  gap: 1.25rem;

  height: 80px;
`

export const OrderTotalSection = styled.div`
  align-items: center;

  justify-content: center;
  width: 368px;

  row-gap: 0;

  font-weight: 300;
  font-size: 0.875rem;
  font-style: normal;

  margin-left: auto;
  margin-right: auto;

  div:last-child {
    font-size: 1.25rem;
    font-weight: 700;
  }
`
export const OrderLineSection = styled.div`
  justify-content: space-between;
  display: flex;

  margin-bottom: 12px;

  align-items: center;
  color: var(--base-header);
`

export const CoffeeImage = styled.img`
  width: 64px;
  height: 64px;

  margin-top: 0.75rem;
`

export const Actions = styled.div`
  width: 171px;
  height: 32px;

  gap: 0.5rem;

  display: flex;
`

export const Divider = styled.div`
  border: 0.05rem solid var(--gray-200);

  width: 368px;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  margin-left: auto;
  margin-right: auto;
`

export const TrashButton = styled.button`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;

  width: 91px;
  height: 32px;
  font-size: 0.75rem;

  cursor: pointer;

  background: var(--gray-200);
  border-radius: 6px;
  color: var(--base-text);

  border: none;
`

export const ConfirmButton = styled.button`
  padding: 12px 8px;

  width: 368px;
  height: 46px;

  font-size: 0.875rem;
  font-weight: 700;

  margin-top: 24px;

  background: #DBAC2C;
  border-radius: 6px;

  border: none;
  color: white;

  cursor: pointer;

  :hover{
    background: #C47F17;
  }
`
