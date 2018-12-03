import {
  startOfWeek,
  endOfWeek,
  getDaysInMonth,
  addDays,
  startOfMonth,
  endOfMonth,
  differenceInCalendarDays,
  isSameMonth,
  addMonths,
} from 'date-fns';

export const getMonth = month => {
  const monthStart = startOfMonth(month);
  const weekStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const monthEnd = endOfMonth(month);
  const weekEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const daysInMonth = getDaysInMonth(month);
  const daysBefore = differenceInCalendarDays(monthStart, weekStart);
  const daysAfter = differenceInCalendarDays(weekEnd, monthEnd);
  const daysInMonthView = daysInMonth + daysBefore + daysAfter;

  let thisMonth = {
    date: monthStart,
    weeks: [],
  };
  let week = [];

  for (let i = 0; i < daysInMonthView; i++) {
    let day = addDays(weekStart, i);
    if (isSameMonth(day, month)) {
      week.push(day);
    } else {
      week.push(null);
    }
    if (week.length % 7 === 0) {
      thisMonth.weeks.push(week);
      week = [];
    }
  }

  return thisMonth;
}

export const getMonths = (firstMonth = new Date()) => (
  (numberOfMonths = 1) => {
    const months = [];

    for (let i = 0; i < numberOfMonths; i++) {
      months.push(getMonth(addMonths(firstMonth, i)));
    }

    return months;
  }
)
