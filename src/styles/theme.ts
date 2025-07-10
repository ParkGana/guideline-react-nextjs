import { css } from 'styled-components';

const typography = {
  title1: css`
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
  `,
  title2: css`
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  `,
  label1: css`
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
  `,
  label2: css`
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  `,
  body1: css`
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  `,
  body2: css`
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
  `,
  caption1: css`
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
  `,
  caption2: css`
    font-size: 10px;
    line-height: 12px;
    font-weight: 500;
  `
};

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
    `,

    /* responsiveTitle 사용 시 width가 640px 이상인 경우 title1, 이하인 경우 title2 적용 */
    responsiveTitle: css`
      ${typography.title2}
      @media (min-width: 640px) {
        ${typography.title1}
      }
    `,

    /* responsiveLabel 사용 시 width가 640px 이상인 경우 label1, 이하인 경우 label2 적용 */
    responsiveLabel: css`
      ${typography.label2}
      @media (min-width: 640px) {
        ${typography.label1}
      }
    `,

    /* responsiveBody 사용 시 width가 640px 이상인 경우 body1, 이하인 경우 body2 적용 */
    responsiveBody: css`
      ${typography.body2}
      @media (min-width: 640px) {
        ${typography.body1}
      }
    `,

    /* responsiveCaption 사용 시 width가 640px 이상인 경우 caption1, 이하인 경우 caption2 적용 */
    responsiveCaption: css`
      ${typography.caption2}
      @media (min-width: 640px) {
        ${typography.caption1}
      }
    `
  }
};

export type StyledTheme = typeof theme;
