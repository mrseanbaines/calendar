import React, { memo } from 'react';
import { Flex, Box } from '@rebass/grid';
import {
  getDate,
  isSameDay,
  isAfter,
  isBefore,
} from 'date-fns';
import { END_DATE } from '~/constants';
import Day from '~/components/Day';

export default memo(({
  month,
  id,
  startDate,
  endDate,
  hoveredDate,
  focusedDate,
  handleDateSelect,
  handleDateHover,
}) => (
  <div id={id}>
    {month.weeks.map((week, i) => (
      <Flex key={i} flexWrap='wrap'>
        {week.map((day, i) => {
          const isStartDate = isSameDay(day, startDate);
          const isEndDate = isSameDay(day, endDate);
          const isHoveredDate = isSameDay(day, hoveredDate);
          const bothDatesSelected = startDate && endDate;
          const isBetweenStartAnd = date => isBefore(day, date) && isAfter(day, startDate);

          return (
            <Box key={i} width={1/7}>
              <Day
                day={day}
                dayContents={day && getDate(day)}
                handleDateSelect={handleDateSelect}
                handleDateHover={handleDateHover}
                selectedStart={bothDatesSelected && isStartDate}
                selectedEnd={bothDatesSelected && isEndDate}
                selectedMiddle={bothDatesSelected && isBetweenStartAnd(endDate)}
                isDaySelected={isStartDate || isEndDate || isBetweenStartAnd(endDate)}
                isDayHighlighted={
                  (startDate && focusedDate === END_DATE) &&
                  (isBetweenStartAnd(hoveredDate) || isStartDate || isHoveredDate)
                }
              />
            </Box>
          );
        })}
      </Flex>
    ))}
  </div>
));
