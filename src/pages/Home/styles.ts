import styled from 'styled-components';

import { titleXL, titleL, textL, textM } from '../../styles/typography';

import backgroundImg from '../../assets/background-hero-banner.png';

interface IconProps {
  $background: string;
}

export const HeroBanner = styled.section`
  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  padding-top: 9.4rem;
  padding-bottom: 10.8rem;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;

  .text {
    width: 100%;
    max-width: 58.8rem;

    animation: FadeInDown 0.5s ease;

    h1 {
      ${titleXL}
      color: ${(props) => props.theme['base-title']};
    }

    p {
      ${textL}
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 6.6rem;
    }

    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      row-gap: 2rem;
      column-gap: 4rem;
    }
  }

  .image {
    animation: FadeInRight 0.7s ease;
  }

  @media (max-width: 1120px) {
    .text {
      max-width: 49.8rem;
    }
  }

  @media (max-width: 991px) {
    padding-top: 3.4rem;
    padding-bottom: 3.8rem;

    & > div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .text {
      max-width: 56.8rem;

      h1 {
        margin-bottom: 2rem;
      }

      p {
        margin-bottom: 4.6rem;
      }

      ul {
        justify-content: center;
        margin-bottom: 4.8rem;
      }
    }
  }

  @media (max-width: 720px) {
    padding-top: 2.4rem;
    .text {
      h1 {
        font-size: 3.8rem;
      }

      p {
        font-size: 1.8rem;
        margin-bottom: 3.6rem;
      }
    }
  }

  @media (max-width: 540px) {
    .text {
      max-width: 96%;
    }
  }
`;

export const IconList = styled.div<IconProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.$background};

  svg {
    color: ${(props) => props.theme.white};
  }

  span {
    ${textM}
    color: ${(props) => props.theme['base-text']};
  }
`;

export const FeatureList = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const CoffeeListSection = styled.section`
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;

  h2 {
    ${titleL}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 5.4rem;
    animation: FadeInDown 0.5s ease;
  }

  @media (max-width: 540px) {
    & > div {
      text-align: center;
    }
  }
`;

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3.2rem;
  row-gap: 4rem;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
