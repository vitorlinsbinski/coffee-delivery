import styled from 'styled-components';

import { tagText, titleS, titleM, textS } from '../../../styles/typography';

export const Card = styled.li`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  width: 100%;
  max-width: 25.6rem;
  height: 31rem;
  text-align: center;
  padding: 0 2rem 2rem 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  animation: FadeInDown 0.5s ease;

  img {
    margin-top: -2rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin-bottom: 1.6rem;
    margin-top: 1.2rem;
  }

  h3 {
    ${titleS}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.8rem;
  }

  p {
    ${textS}
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 3.3rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    width: 100%;

    .actions {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }
  }
`;

export const CoffeeTag = styled.li`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.4rem 0.8rem;
  border-radius: 10rem;

  ${tagText}
`;

export const AddCartButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  padding: 0.8rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background-color 0.2s;

  svg {
    color: ${(props) => props.theme['base-card']};
  }

  &:hover {
    background-color: ${(props) => props.theme['pruple-dark']};
  }
`;

export const Price = styled.span`
  ${textS}
  color: ${(props) => props.theme['base-text']};

  strong {
    ${titleM}

    color: ${(props) => props.theme['base-text']};
  }
`;
