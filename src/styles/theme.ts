import { css } from 'styled-components';

export const theme = {
  color: {
    gray100: '#fafafa',
    gray200: '#e0e0e0',
    gray300: '#c7c7c7',
    gray400: '#adadad',
    gray500: '#949494',
    gray600: '#7a7a7a',
    gray700: '#616161',
    gray800: '#474747',
    gray900: '#2e2e2e'
  },
  typography: {
    title: css`
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
    `,
    label: css`
      font-size: 20px;
      line-height: 28px;
      font-weight: 700;
    `,
    body: css`
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
    `,
    caption: css`
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
    `
  }
};

export type StyledTheme = typeof theme;
