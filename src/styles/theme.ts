import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: 'rgba(236, 74, 10, 1)',
    primaryLighten: 'rgba(246, 168, 138, 1)',
    greyScale1: 'rgba(255, 255, 255, 1)',
    greyScale2: 'rgba(208, 213, 221, 1)',
    greyScale3: 'rgba(102, 112, 133, 1)',
    greyScale4: 'rgba(52, 64, 84, 1)',
    greyScale5: 'rgba(0, 0, 0, 1)',
  },
  font: {
    title: `
      font-family: Roboto;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.15000000596046448px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    `,
    subtitle: `
      font-family: Roboto;
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    `,
    body: `    
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    `,
    caption: `
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    `,
    button: `
      font-family: Roboto;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    `,
  },
};
