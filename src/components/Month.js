import React, { memo } from 'react';
import { Flex, Box } from '@rebass/grid';
import {
  getDate,
  isSameDay,
} from 'date-fns';
import { END_DATE } from '~/constants';
import Day from '~/components/Day';
import { isBetweenDates } from '../helpers';

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
          const isStartDate = startDate && isSameDay(day, startDate);
          const isEndDate = endDate && isSameDay(day, endDate);
          const isHoveredDate = isSameDay(day, hoveredDate);
          const bothDatesSelected = startDate && endDate;
          const isBetweenStartAndEndDate = isBetweenDates(startDate)(endDate)(day);
          const isBetweenStartAndHoveredDate = isBetweenDates(startDate)(hoveredDate)(day);

          return (
            <Box key={i} width={1/7}>
              <Day
                day={day}
                dayContents={day && getDate(day)}
                handleDateSelect={handleDateSelect}
                handleDateHover={handleDateHover}
                selectedStart={bothDatesSelected && isStartDate}
                selectedEnd={bothDatesSelected && isEndDate}
                selectedMiddle={bothDatesSelected && isBetweenStartAndEndDate}
                isDaySelected={isStartDate || isEndDate || isBetweenStartAndEndDate}
                isDayHighlighted={
                  (startDate && focusedDate === END_DATE) &&
                  (isBetweenStartAndHoveredDate || isStartDate || isHoveredDate)
                }
              />
            </Box>
          );
        })}
      </Flex>
    ))}
  </div>
));
