import React, { PureComponent, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { getDate, format, addMonths } from 'date-fns';
import reset from '~/reset';
import theme from '~/theme';
import Day from '~/components/Day';
import WeekDayHeader from '~/components/WeekDayHeader';
import MonthHeading from '~/components/MonthHeading';
import SquareContainer from '~/components/SquareContainer';
import { getMonths, getWeek } from '~/helpers';

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Barlow:600');

  html {
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.greys[1]};
  }
`;

class App extends PureComponent {
  render() {
    const months = this.props.months();
    const week = this.props.week();
    const {
      weekDayFormat,
      singleLetterWeekDay,
    } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />

          <WeekDayHeader
            week={week}
            weekDayFormat={weekDayFormat}
            singleLetterWeekDay={singleLetterWeekDay}
          />

          {months.map(month => (
            <Fragment key={format(month.date, 'MMM-YYYY')}>
              <Flex justifyContent='space-between'>
                <Box width={1/7}>
                  <SquareContainer />
                </Box>
                <Flex alignItems='center'>
                  <MonthHeading id={format(month.date, 'MMM-YYYY').toLowerCase()}>
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

App.defaultProps = {
  weekStartsOn: 1,
  firstMonth: addMonths(new Date(), 2),
  numberOfMonths: 18,
  weekDayFormat: 'dd',
  singleLetterWeekDay: true,
  months() {
    return getMonths(this.firstMonth, this.numberOfMonths, this.weekStartsOn);
  },
  week() {
    return getWeek(this.weekStartsOn);
  },
};

export default App;
