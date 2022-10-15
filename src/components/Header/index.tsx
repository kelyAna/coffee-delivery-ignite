import { NavLink } from 'react-router-dom';

import { CartButtonContainer, HeaderContainer, HeaderLocation } from './styles';

import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import cartIcon from '../../assets/cart-icon.svg';
import geolocationIcon from '../../assets/geolocation-icon.svg';
import { CartContext } from '../../contexts/CartContext';

export const Header = () => {
  return (
    <CartContext.Consumer>
      {(context) => (
        <HeaderContainer>
          <img src={coffeDeliveryLogo} />
          <nav>
            <HeaderLocation>
              <img src={geolocationIcon} />
              <span>Porto Alegre, RS</span>
            </HeaderLocation>
            <NavLink to="/checkout">
              {context.cart.length !== 0 ? (
                <>
                  <div>{context.cart.length}</div>
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
      )}
    </CartContext.Consumer>
  );
};
