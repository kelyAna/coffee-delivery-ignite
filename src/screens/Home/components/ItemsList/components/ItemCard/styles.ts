import styled from 'styled-components'

export const ItemCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  text-align: center;
  background: #F3F2F2;
  border-radius: 6px 36px;

  align-items: center;
  justify-content: center;

  padding-bottom: 1.5rem;
`

export const ItemCardContainerHeader = styled.h2`
  font-weight: 800;
  margin-bottom: 2.125rem;

  font-family: 'Baloo 2';
`

export const ItemCardTagList = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin-top: 0.75rem;
`

export const ItemCartImage = styled.img`
  margin-top: -20px;

  width: 7.5rem;
  height: 7.5rem;
`

export const ItemCardTag = styled.div`
  background: var(--yellow-100);
  padding: 0.25rem 0.5rem;

  font-size: 0.625rem;
  font-weight: 700;

  border-radius: 100px;
  color: var(--yellow-dark);
`

export const ItemNameCard = styled.p`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
`

export const ItemDescriptionCard = styled.p`
  font-size: 0.875rem;
  font-style: normal;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 33px;

  max-width: 200px;

  color: var(--base-title);
`

export const ItemBuyCard = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 0px 24px 0px 24px;

  height: 38px;
`

export const ItemPriceCard = styled.div`
  font-family: 'Roboto';
  font-weight: 400;

  font-size: 0.875rem;

  align-items: center;

  display: flex;
  gap: 0.2rem;

  color: var(--base-text);
`

export const ItemActionsCard = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: row;

  gap: 0.5rem;
`

export const ItemCart = styled.div`
  padding: 0.4rem;
  border-radius: 6px;
  
  background-color: var(--purple-400);

  color: white;
`