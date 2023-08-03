import { css } from 'styled-components';

// Títulos
const baseTitleFontFamily = css`
  font-family: 'Baloo 2', cursive;
`;

const baseTitleExtraBold = css`
  ${baseTitleFontFamily}
  font-weight: 800;
  line-height: 1.3;
`;

const baseTitleBold = css`
  ${baseTitleFontFamily}
  font-weight: 700;
  line-height: 1.3;
`;

export const titleXL = css`
  ${baseTitleFontFamily}
  font-size: 4.8rem;
  ${baseTitleExtraBold}
`;

export const titleL = css`
  ${baseTitleFontFamily}
  font-size: 3.2rem;
  ${baseTitleExtraBold}
`;

export const titleM = css`
  ${baseTitleFontFamily}
  font-size: 2.4rem;
  ${baseTitleExtraBold}
`;

export const titleS = css`
  ${baseTitleFontFamily}
  font-size: 2rem;
  ${baseTitleBold}
`;

export const titleXS = css`
  ${baseTitleFontFamily}
  font-size: 1.8rem;
  ${baseTitleBold}
`;

// Textos
export const textL = css`
  font-size: 2rem;
  line-height: 1.3;
`;

export const textM = css`
  font-size: 1.6rem;
  line-height: 1.3;
`;

export const textS = css`
  font-size: 1.4rem;
  line-height: 1.3;
`;

export const textXS = css`
  font-size: 1.2rem;
  line-height: 1.3;
`;

// Others
export const tagText = css`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
`;

export const buttonGText = css`
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: 700;
`;

export const buttonMText = css`
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 400;
`;
