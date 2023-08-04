import styled from 'styled-components';

import { textM } from '../../styles/typography';

export const CounterContainer = styled.div`
  width: 7.2rem;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  span {
    ${textM}
    color: ${(props) => props.theme['base-title']};
  }

  svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme['pruple-dark']};
    }
  }

  @media (max-width: 720px) {
    width: 9.8rem;
    height: 4.8rem;
    gap: 0.8rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
