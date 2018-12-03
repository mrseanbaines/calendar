import React, { Component, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Day from '~/components/Day';
import WeekDay from '~/components/WeekDay';
import MonthHeading from '~/components/MonthHeading';
import SquareContainer from '~/components/SquareContainer';
import reset from '~/reset';
import theme from '~/theme';
import { Flex, Box } from '@rebass/grid';
import { getDate, format } from 'date-fns';
import { getMonths } from '~/helpers';
import styled from 'styled-components';

const firstMonth = new Date();
const numberOfMonths = 2;
const months = getMonths(firstMonth)(numberOfMonths);

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Barlow:600');

  html {
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.greys[1]};
  }
`;

const FlexWeekDayHeader = styled(Flex)`
  position: fixed;
  z-index: 1;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <FlexWeekDayHeader width={1}>
            <Box width={1/7}>
              <WeekDay weekDayContents={format(new Date(2018, 11, 10), 'dd').slice(0, 1)} />
            </Box>
            <Box width={1/7}>
              <WeekDay weekDayContents={format(new Date(2018, 11, 11), 'dd').slice(0, 1)} />
            </Box>
            <Box width={1/7}>
              <WeekDay weekDayContents={format(new Date(2018, 11, 12), 'dd').slice(0, 1)} />
            </Box>
            <Box width={1/7}>
              <WeekDay weekDayContents={format(new Date(2018, 11, 13), 'dd').slice(0, 1)} />
            </Box>
            <Box width={1/7}>
              <WeekDay weekDayContents={format(new Date(2018, 11, 14), 'dd').slice(0, 1)} />
            </Box>
            <Box width={1/7}>
              <WeekDay weekDayContents={format(new Date(2018, 11, 15), 'dd').slice(0, 1)} />
            </Box>
            <Box width={1/7}>
              <WeekDay weekDayContents={format(new Date(2018, 11, 16), 'dd').slice(0, 1)} />
            </Box>
          </FlexWeekDayHeader>

          <Flex>
            <Box width={1/7}>
              <SquareContainer />
            </Box>
          </Flex>

          {months.map((month, i) => (
            <Fragment key={i}>
              <Flex justifyContent='space-between'>
                <Box width={1/7}>
                  <SquareContainer />
                </Box>
                <Flex alignItems='center'>
                  <MonthHeading>
                    {format(month.date, 'MMM YYYY')}
                  </MonthHeading>
                </Flex>
                <Box width={1/7}>
                  <SquareContainer />
                </Box>
              </Flex>
              {month.weeks.map((week, i) => (
                <Flex key={i} flexWrap='wrap'>
                  {week.map((day, i) => (
                    <Box key={i} width={1/7}>
                      <Day dayContents={day && getDate(day)} />
                    </Box>
                  ))}
                </Flex>
              ))}
            </Fragment>
          ))}
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
