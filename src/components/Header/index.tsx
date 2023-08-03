import {
  HeaderContainer,
  LocationTag,
  CartTag,
  QuantityCartCircle,
} from './styles';

import { ContainerBox } from '../../styles/container';

import coffeeDeliveryLogo from '../../assets/logo-coffee-delivery.svg';

import { MapPin, ShoppingCart } from 'phosphor-react';

import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '../../contexts/ShoppingContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { productsInCart } = useContext(ShoppingContext);

  useEffect(() => {
    function handleScroll() {
      const isHeaderScrolled = window.scrollY > 80;
      setIsScrolled(isHeaderScrolled);
    }

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <ContainerBox>
        <NavLink to="/">
          <div className="logo">
            <img
              src={coffeeDeliveryLogo}
              alt="Logotipo de um copo de café roxo com uma silhueta de um foguete em propulsão e escrito do lado 'Coffee Delivery'"
            />
          </div>
        </NavLink>

        <nav>
          <LocationTag>
            <MapPin size={22} weight="fill" />
            <span>Sinop, MT</span>
          </LocationTag>

          <NavLink to="/cart">
            <CartTag>
              <ShoppingCart size={22} weight="fill" />
              {productsInCart.length > 0 && (
                <QuantityCartCircle>
                  <span>
                    {productsInCart.reduce((acc, cur) => {
                      return acc + cur.quantity;
                    }, 0)}
                  </span>
                </QuantityCartCircle>
              )}
            </CartTag>
          </NavLink>
        </nav>
      </ContainerBox>
    </HeaderContainer>
  );
}
