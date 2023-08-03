import styled from 'styled-components';

import { textM, textS } from '../../../styles/typography';

export const AddressContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 100%;
  border-radius: 6px;
  padding: 4rem;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    margin-bottom: 3.2rem;

    .icon {
      svg {
        color: ${(props) => props.theme['yellow-dark']};
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

  & > div {
    display: grid;

    grid-template-areas:
      'cep cep cep'
      'street street street'
      'number complement complement'
      'neighborhood city uf';
    grid-template-columns: 20rem 27.6rem 6rem;
    row-gap: 1.6rem;
    column-gap: 1.2rem;
  }
`;

const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  height: 4.2rem;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 0 1.2rem;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  ${textS}
  color: 1px solid ${(props) => props.theme['base-text']};

  &::-webkit-input-placeholder {
    ${textS}
    color: ${(props) => props.theme['base-label']};
  }
`;

export const CepInput = styled(BaseInput)`
  grid-area: cep;
  width: 100%;
  max-width: 20rem;
`;

export const StreetInput = styled(BaseInput)`
  grid-area: street;
`;

export const NumberHomeInput = styled(BaseInput)`
  grid-area: number;
`;

export const ComplementArea = styled.div`
  grid-area: complement;
  position: relative;

  span {
    position: absolute;
    right: 1.2rem;
    top: 1.4rem;
    color: ${(props) => props.theme['base-label']};

    font-size: 1.2rem;
    font-style: italic;
    font-weight: 400;
    line-height: 130%; /* 0.975rem */
  }
`;

export const ComplementInput = styled(BaseInput)`
  width: 100%;
  padding: 0 6.7rem 0 1.2rem;
`;

export const NeighborhoodInput = styled(BaseInput)`
  grid-area: neighborhood;
`;

export const CityInput = styled(BaseInput)`
  grid-area: city;
`;

export const UfInput = styled(BaseInput)`
  grid-area: uf;
`;
