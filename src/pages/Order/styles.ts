import styled from 'styled-components';

import { textM, titleL, textL } from '../../styles/typography';

export const MainContainer = styled.main`
  margin-top: 8rem;
  margin-bottom: 3rem;

  & > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  @media (max-width: 991px) {
    margin-top: 3rem;

    & > div {
      flex-direction: column-reverse;
      align-items: center;
      gap: 5rem;
    }
  }

  @media (max-width: 720px) {
    margin-top: 2rem;
  }
`;

export const LeftDiv = styled.div`
  h2 {
    ${titleL}
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 0.4rem;
  }

  & > p {
    ${textL}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 4rem;
  }

  @media (max-width: 720px) {
    & > p {
      margin-bottom: 3rem;
      text-align: center;
    }

    h2 {
      text-align: center;
    }
  }
`;

export const OrderDetailsArea = styled.div`
  width: 100%;
  max-width: 52.6rem;
  padding: 4rem 0 4rem 4rem;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  position: relative;

  z-index: 1;

  &::before {
    content: '';
    display: block;
    height: calc(100% - calc(1px * 2));
    width: calc(100% - calc(1px * 2));
    background-color: ${(props) => props.theme.background};
    position: absolute;
    top: 1px;
    right: 1px;
    border-radius: calc(6px - 1px) calc(36px - 1px) calc(6px - 1px)
      calc(36px - 1px);

    z-index: -1;
  }

  @media (max-width: 720px) {
    padding: 3rem 0 3rem 3rem;
  }
`;

const BaseDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;

  .icon {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  .text {
    p,
    span,
    strong {
      ${textM}
      color: ${(props) => props.theme['base-text']};
    }

    max-width: 70%;
  }
`;

export const AddressDetails = styled(BaseDetails)`
  .icon {
    background-color: ${(props) => props.theme.purple};
  }
`;

export const DeliveryTimeDetails = styled(BaseDetails)`
  .icon {
    background-color: ${(props) => props.theme.yellow};
  }
`;

export const PaymentDetails = styled(BaseDetails)`
  .icon {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;
