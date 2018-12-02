import React, { Component, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Day from '~/components/Day';
import reset from '~/reset';
import theme from '~/theme';
import { Flex, Box } from '@rebass/grid';
import getDate from 'date-fns/get_date';

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
          <Flex flexWrap='wrap'>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 7))} />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 8))} selected selectedStart />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 9))} selected selectedMiddle />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 10))} selected selectedEnd />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 11))} />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 12))} />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 13))} selected selectedStart />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 14))} selected selectedMiddle />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 15))} selected selectedMiddle />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 16))} selected selectedEnd />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 17))} />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 18))} selected />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 19))} />
            </Box>
            <Box width={1/7}>
              <Day dayContents={getDate(new Date(2018, 11, 20))} />
            </Box>
          </Flex>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
