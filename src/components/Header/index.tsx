import { NavLink } from 'react-router-dom';

import { CartButtonContainer, HeaderContainer, HeaderLocation } from './styles';

import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import cartIcon from '../../assets/cart-icon.svg';
import geolocationIcon from '../../assets/geolocation-icon.svg';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

export const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} />
      <nav>
        <HeaderLocation>
          <img src={geolocationIcon} />
          <span>Porto Alegre, RS</span>
        </HeaderLocation>
        <NavLink to="/checkout">
          {cart?.length !== 0 ? (
            <>
              <div>{cart?.length}</div>
              <CartButtonContainer>
                <img src={cartIcon} />
              </CartButtonContainer>
            </>
          ) : (
            <CartButtonContainer>
              <img src={cartIcon} />
            </CartButtonContainer>
          )}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
