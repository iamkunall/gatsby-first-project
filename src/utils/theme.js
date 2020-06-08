import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const mainBrandColor = '#07C5A1';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.

  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#FFFFFF',
  backgroundLite: '#EAF0F1',
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  primaryFontFamily: "'Open Sans', sans-serif",
  secondaryFontFamily: "'Roboto', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.secondaryFontFamily};
    letter-spacing: 0.03rem !important;
    font-size: 16px;
  }
  .title {
    font-family: ${theme.secondaryFontFamily};
  }
  .button {
    font-family: ${theme.secondaryFontFamily};
  }

  .section{
    @media only screen and (min-width: 1023px) {
      padding:3rem 8rem !important;
    }
  }

`;

export default GlobalStyle;
