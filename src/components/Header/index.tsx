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

  const { productsInCart, orders } = useContext(ShoppingContext);

  const latestCityStored =
    orders.length > 0 ? orders[orders.length - 1].city : '';

  const latestUfStored = orders.length > 0 ? orders[orders.length - 1].uf : '';

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
        <NavLink to="/coffee-delivery">
          <div className="logo">
            <img
              src={coffeeDeliveryLogo}
              alt="Logotipo de um copo de café roxo com uma silhueta de um foguete em propulsão e escrito do lado 'Coffee Delivery'"
            />
          </div>
        </NavLink>

        <nav>
          {latestCityStored && latestUfStored && (
            <LocationTag>
              <MapPin size={22} weight="fill" />
              <span>
                {latestCityStored}, {latestUfStored}
              </span>
            </LocationTag>
          )}

          <NavLink to="/coffee-delivery/cart">
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
