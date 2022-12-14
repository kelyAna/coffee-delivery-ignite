import styled from 'styled-components'

export const IntroSectionContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  margin-top: 94px;
`
 
export const HeaderSection = styled.div``

export const TitleSection = styled.div`
  width: 600px;

  h1 {
      font-size: 3rem;
      font-weight: 800;
      font-family: 'Baloo 2';

    }

    p {
      font-size: 1.25rem;
      color: var(--base-header);

      width: 500px;
    }
`


export const ItemsSection = styled.div`
  margin-top: 66px;
  display: flex;
  gap: 30px;
`
export const ItemSection = styled.div`
  align-items: center;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  gap: 10px;

  span {
    font-size: 1rem;
  }
`
