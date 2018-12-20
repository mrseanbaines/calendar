import React, { memo } from 'react';
import { Flex, Box } from '@rebass/grid';
import {
  getDate,
  isSameDay,
  isBefore,
} from 'date-fns';
import { END_DATE } from '~/constants';
import Day from '~/components/Day';
import { isBetweenDates, isInclusivelyBetweenDates } from '../helpers';

export default memo(({
  month,
  id,
  startDate,
  endDate,
  hoveredDate,
  focusedDate,
  handleDateSelect,
  handleMouseEnter,
  handleMouseLeave,
}) => (
  <div id={id}>
    {month.weeks.map((week, i) => (
      <Flex key={i} flexWrap='wrap'>
        {week.map((day, i) => {
          return (
            <Box key={i} width={1/7}>
              <Day
                day={day}
                dayContents={day && getDate(day)}
                handleDateSelect={handleDateSelect}
                isDaySelected={startDate && isInclusivelyBetweenDates(startDate)(endDate)(day)}
                selectedStart={startDate && endDate && isSameDay(day, startDate)}
                selectedEnd={startDate && endDate && isSameDay(day, endDate)}
                selectedMiddle={startDate && endDate && isBetweenDates(startDate)(endDate)(day)}
                isDayHighlighted={
                  startDate && !endDate && isInclusivelyBetweenDates(startDate)(hoveredDate)(day)
                }
                hoveredStart={startDate && !endDate && isSameDay(day, startDate) && !isSameDay(hoveredDate, startDate) && !isBefore(hoveredDate, startDate)}
                hoveredEnd={startDate && !endDate && isSameDay(day, hoveredDate) && !isSameDay(hoveredDate, startDate) && !isBefore(hoveredDate, startDate)}
                hoveredMiddle={startDate && !endDate && isBetweenDates(startDate)(hoveredDate)(day)}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </Box>
          );
        })}
      </Flex>
    ))}
  </div>
));
