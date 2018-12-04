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
  eachDay,
} from 'date-fns';

export const getMonth = (month, weekStartsOn) => {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const weekStart = startOfWeek(monthStart, { weekStartsOn });
  const weekEnd = endOfWeek(monthEnd, { weekStartsOn });
  const daysInMonth = getDaysInMonth(month);
  const daysBefore = differenceInCalendarDays(monthStart, weekStart);
  const daysAfter = differenceInCalendarDays(weekEnd, monthEnd);
  const daysInMonthView = daysInMonth + daysBefore + daysAfter;

  const currentMonth = {
    date: monthStart,
    weeks: [],
  };
  let week = [];

  for (let i = 0; i < daysInMonthView; i++) {
    const day = addDays(weekStart, i);

    if (isSameMonth(day, month)) {
      week.push(day);
    } else {
      week.push(null);
    }

    if (week.length % 7 === 0) {
      currentMonth.weeks.push(week);
      week = [];
    }
  }

  return currentMonth;
}

export const getMonths = (
  firstMonth = new Date(),
  numberOfMonths = 1,
  weekStartsOn = 1,
) => {
  const months = [];

  for (let i = 0; i < numberOfMonths; i++) {
    months.push(getMonth(addMonths(firstMonth, i), weekStartsOn));
  }

  return months;
}

export const getWeek = (weekStartsOn = 1) => {
  const date = new Date();
  const weekStart = startOfWeek(date, { weekStartsOn });
  const weekEnd = endOfWeek(date, { weekStartsOn });
  const week = eachDay(weekStart, weekEnd);

  return week;
}
