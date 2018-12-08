import React, { PureComponent, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  format,
  addMonths,
  isSameDay,
  isBefore,
} from 'date-fns';
import reset from '~/reset';
import theme from '~/theme';
import Month from '~/components/Month';
import WeekDayHeader from '~/components/WeekDayHeader';
import MonthHeading from '~/components/MonthHeading';
import { getMonths, getWeek } from '~/helpers';
import {
  START_DATE,
  END_DATE,
} from '~/constants';

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Barlow:600');

  html {
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.greys[1]};
  }
`;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedDate: START_DATE,
    };
  }

  handleDateSelect = day => {
    const { startDate, endDate } = this.state;

    if (
      (startDate && endDate) ||
      (startDate && isBefore(day, startDate)) ||
      (startDate && isSameDay(day, startDate))
    ) {
      this.setState({
        startDate: day,
        endDate: null,
        focusedDate: END_DATE,
      });
    } else {
      this.setState(({ focusedDate }) => ({
        [focusedDate]: day,
        focusedDate: focusedDate === START_DATE ? END_DATE : START_DATE,
      }));
    }
  }

  render() {
    const months = this.props.months();
    const week = this.props.week();
    const { weekDayFormat, singleLetterWeekDay } = this.props;
    const { startDate, endDate } = this.state;

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
              <MonthHeading
                month={month}
                id={`${format(month.date, 'MMM-YYYY').toLowerCase()}-heading`}
              />
              <Month
                id={format(month.date, 'MMM-YYYY').toLowerCase()}
                month={month}
                startDate={startDate}
                endDate={endDate}
                handleDateSelect={this.handleDateSelect}
              />
            </Fragment>
          ))}

        </Fragment>
      </ThemeProvider>
    );
  }
}

App.defaultProps = {
  weekStartsOn: 1,
  firstMonth: addMonths(new Date(), 0),
  numberOfMonths: 3,
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
