import styled from 'styled-components';
import { buttonMText, textM } from '../../../styles/typography';

export const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .image {
    width: 6.4rem;
    height: 6.4rem;

    margin-right: 2rem;
  }

  .actions {
    display: flex;
    flex-direction: column;
    margin-right: 5rem;

    h4 {
      ${textM}
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 0.8rem;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }

  .price {
    span {
      ${textM}
      font-weight: 700;
      color: ${(props) => props.theme['base-text']};
    }
  }
`;

export const RemoveButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.85rem 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background-color 0.2s;

  ${buttonMText}

  gap: 0.7rem;

  color: ${(props) => props.theme['base-text']};

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`;
