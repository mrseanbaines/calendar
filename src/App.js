import React, { Component, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Day from './components/Day';
import reset from './reset';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Barlow:600');

  html {
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.greys[1]};
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <Day />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
