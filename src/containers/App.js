import React, { PureComponent, Fragment } from 'react';
import { format } from 'date-fns';
import Month from '~/components/Month';
import WeekDayHeader from '~/components/WeekDayHeader';
import MonthHeading from '~/components/MonthHeading';
import { getMonths, getWeek, isSameOrBefore } from '~/helpers';
import {
  START_DATE,
  END_DATE,
} from '~/constants';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedDate: START_DATE,
      hoveredDate: null,
    };
  }

  handleDateSelect = day => {
    const { startDate, endDate } = this.state;
    let nextState;

    if (!startDate || isSameOrBefore(day)(startDate) || (startDate && endDate)) {
      nextState = {
        startDate: day,
        endDate: null,
        focusedDate: END_DATE,
      }
    } else {
      nextState = {
        startDate: startDate,
        endDate: day,
        focusedDate: START_DATE,
      }
    }

    this.setState(nextState);
  }

  handleMouseEnter = day => {
    console.log(day)
    this.setState({ hoveredDate: day });
  }

  handleMouseLeave = day => {
    this.setState({ hoveredDate: null });
  }

  render() {
    const months = this.props.months();
    const week = this.props.week();
    const { weekDayFormat, singleLetterWeekDay } = this.props;
    const { startDate, endDate, hoveredDate, focusedDate } = this.state;

    return (
      <Fragment>

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
              hoveredDate={hoveredDate}
              focusedDate={focusedDate}
              endDate={endDate}
              handleDateSelect={this.handleDateSelect}
              handleMouseEnter={this.handleMouseEnter}
              handleMouseLeave={this.handleMouseLeave}
            />
          </Fragment>
        ))}

      </Fragment>
    );
  }
}

App.defaultProps = {
  weekStartsOn: 1,
  firstMonth: new Date(),
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
