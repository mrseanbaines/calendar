import React, { Component, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Day from '~/components/Day';
import reset from '~/reset';
import theme from '~/theme';
import { Flex, Box } from '@rebass/grid';

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
          <Flex>
            <Box width={1/7}>
              <Day dayContents={7} />
            </Box>
            <Box width={1/7}>
              <Day dayContents={8} selected />
            </Box>
            <Box width={1/7}>
              <Day dayContents={9} selected selectedStart />
            </Box>
            <Box width={1/7}>
              <Day dayContents={10} selected selectedMiddle />
            </Box>
            <Box width={1/7}>
              <Day dayContents={11} selected selectedEnd />
            </Box>
            <Box width={1/7}>
              <Day dayContents={12} />
            </Box>
            <Box width={1/7}>
              <Day dayContents={13} />
            </Box>
          </Flex>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
