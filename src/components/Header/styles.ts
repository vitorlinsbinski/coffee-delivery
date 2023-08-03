import styled from 'styled-components';
import { textS } from '../../styles/typography';

interface HeaderProps {
  $isScrolled: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  position: sticky;
  top: 0;
  left: 0;

  background-color: ${(props) => (props.$isScrolled ? 'white' : 'transparent')};
  transition: background-color 0.2s;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  display: flex;
  height: 10.4rem;

  nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const BaseTagContainer = styled.div`
  padding: 0.8rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
`;

export const LocationTag = styled(BaseTagContainer)`
  background-color: ${(props) => props.theme['purple-light']};
  gap: 0.4rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    ${textS}
    color: ${(props) => props.theme['pruple-dark']};
  }
`;

export const CartTag = styled(BaseTagContainer)`
  background-color: ${(props) => props.theme['yellow-light']};
  position: relative;

  transition: background-color 0.2s;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    transition: color 0.2s;
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow']};

    svg {
      color: ${(props) => props.theme['yellow-light']};
    }
  }
`;

export const QuantityCartCircle = styled.div`
  position: absolute;
  top: -0.8rem;
  right: -0.835rem;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme['yellow-dark']};

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.2rem;

    font-weight: 700;
    color: ${(props) => props.theme.white};
  }
`;
