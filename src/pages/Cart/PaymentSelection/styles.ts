import styled from 'styled-components';

import { textM, textS, buttonMText } from '../../../styles/typography';

interface SelectorProps {
  $isSelected: boolean;
}

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 4rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    margin-bottom: 3.2rem;

    .icon {
      svg {
        color: ${(props) => props.theme.purple};
      }
    }

    .text {
      h4 {
        ${textM}
        font-weight: 400;
        color: ${(props) => props.theme['base-subtitle']};
      }

      p {
        ${textS}
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`;

export const SelectorArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Selector = styled.div<SelectorProps>`
  width: 17.8rem;
  padding: 1.6rem;
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme['purple-light']
      : props.theme['base-button']};
  border: ${(props) =>
    props.$isSelected ? `1px solid ${props.theme.purple}` : 'none'};
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;

  gap: 1.2rem;

  transition: all 0.2s;

  & > div {
    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  span {
    ${buttonMText}
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`;
