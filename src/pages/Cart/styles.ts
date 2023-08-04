import styled from 'styled-components';

import {
  titleXS,
  textL,
  textS,
  textM,
  buttonGText,
} from '../../styles/typography';

export const MainFormArea = styled.main`
  margin-top: 4rem;
  margin-bottom: 4rem;

  form {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media (max-width: 991px) {
    form {
      flex-direction: column;
      align-items: center;
      gap: 2.8rem;
    }
  }

  @media (max-width: 720px) {
    margin-top: 3rem;
  }
`;

export const OrderDataArea = styled.section`
  width: 100%;
  max-width: 64rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  animation: FadeInDown 0.4s ease;

  h3 {
    ${titleXS}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.3rem;
  }

  @media (max-width: 1120px) {
    max-width: 56rem;
  }

  @media (max-width: 991px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const OrderReviewArea = styled.section`
  width: 100%;
  max-width: 44.8rem;

  animation: FadeInDown 0.4s ease;

  h3 {
    ${titleXS}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1.5rem;
  }

  @media (max-width: 991px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ReviewCard = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  padding: 4rem;
  border-radius: 6px 44px 6px 44px;

  @media (max-width: 540px) {
    padding: 3rem;
  }
`;

export const Products = styled.div`
  & > div {
    padding-bottom: 3.2rem;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};

    &:not(:first-child) {
      padding-top: 3.2rem;
    }
  }
`;

export const ReviewPrice = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;

  & > div {
    &:not(:last-child) {
      margin-bottom: 1.35rem;
    }
  }
`;

const BasePriceArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TotalItensPrice = styled(BasePriceArea)`
  span,
  p {
    color: ${(props) => props.theme['base-text']};
  }

  p {
    ${textS}
  }

  span {
    ${textM}
  }
`;

export const DeliveryPrice = styled(BasePriceArea)`
  span,
  p {
    color: ${(props) => props.theme['base-text']};
  }

  p {
    ${textS}
  }

  span {
    ${textM}
  }
`;

export const TotalPrice = styled(BasePriceArea)`
  span,
  p {
    ${textL}
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const ConfirmationButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.yellow};
  padding: 1.2rem 0;

  border-radius: 6px;
  ${buttonGText}

  cursor: pointer;
  opacity: 1;

  color: ${(props) => props.theme.white};

  transition: all 0.2s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
