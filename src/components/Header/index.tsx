import { NavLink } from 'react-router-dom'

import { CartButtonContainer, HeaderContainer, HeaderLocation } from './styles'

import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import cartIcon from '../../assets/cart-icon.svg'
import geolocationIcon from '../../assets/geolocation-icon.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} />
      <nav>
        <HeaderLocation>
          <img src={geolocationIcon} />
          <span>Porto Alegre, RS</span>
        </HeaderLocation>
        <NavLink to='/cart'>
          <CartButtonContainer>
           <img src={cartIcon} />
          </CartButtonContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}