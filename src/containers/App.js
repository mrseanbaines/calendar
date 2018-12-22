import React, { PureComponent, Fragment } from 'react';
import { format, isSameDay } from 'date-fns';
import Month from '~/components/Month';
import WeekDayHeader from '~/components/WeekDayHeader';
import MonthHeading from '~/components/MonthHeading';
import {
  getMonths,
  getWeek,
  isSameOrBefore,
  getSelectedDates,
} from '~/helpers';
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
    };

    this.months = props.months();
    this.week = props.week();
  }

  handleDateSelect = day => {
    const { startDate, endDate } = this.state;
    let nextState;

    this.resetClassName('hovered');
    this.resetClassName('selected');

    document.querySelector(`[data-date='${day}']`).classList.add('selected');

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

      const selectedDates = getSelectedDates(startDate, day);
      this.addStylingClasses(selectedDates, 'selected');
    }

    this.setState(nextState);
  }

  addStylingClasses = (selectedDates, className) => {
    const days = selectedDates.map(day => (
      document.querySelector(`[data-date='${day}']`)
    ));

    days.forEach((day, i, arr) => {
      if (i === 0) {
        day.classList.add(className, 'start');
      } else if (i === arr.length - 1) {
        day.classList.add(className, 'end');
      } else {
        day.classList.add(className, 'mid');
      }
    });
  }

  resetClassName = className => {
    const days = document.querySelectorAll('.day');

    days.forEach(day => (
      day.classList.contains(className) && (
        day.classList.remove(className, 'start', 'mid', 'end')
      )
    ));
  }

  handleMouseEnter = hoveredDate => {
    const { startDate, endDate } = this.state;

    this.resetClassName('hovered');

    if (startDate && !endDate && !isSameDay(hoveredDate, startDate)) {
      const selectedDates = getSelectedDates(startDate, hoveredDate);
      this.addStylingClasses(selectedDates, 'hovered');
    }
  }

  render() {
    const { weekDayFormat, singleLetterWeekDay } = this.props;

    return (
      <Fragment>

        <WeekDayHeader
          week={this.week}
          weekDayFormat={weekDayFormat}
          singleLetterWeekDay={singleLetterWeekDay}
        />

        {this.months.map(month => (
          <Fragment key={format(month.date, 'MMM-YYYY')}>
            <MonthHeading
              month={month}
              id={`${format(month.date, 'MMM-YYYY').toLowerCase()}-heading`}
            />
            <Month
              id={format(month.date, 'MMM-YYYY').toLowerCase()}
              month={month}
              handleDateSelect={this.handleDateSelect}
              handleMouseEnter={this.handleMouseEnter}
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
