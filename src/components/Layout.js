import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  min-height: 70vh;
`;

const IndexLayout = ({ children, hideHeader }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description={config.description} />
      </Helmet>
      <GlobalStyle />
      {!hideHeader && <Header />}
      <Container>{children}</Container>
      <Footer />
    </>
  </ThemeProvider>
);

export default IndexLayout;
