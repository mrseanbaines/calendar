import React, { memo } from 'react';
import { Flex, Box } from '@rebass/grid';
import {
  getDate,
  isSameDay,
  isAfter,
  isBefore,
} from 'date-fns';
import Day from '~/components/Day';

export default memo(({ month, id, startDate, endDate, handleDateSelect }) => (
  <div id={id}>
    {month.weeks.map((week, i) => (
      <Flex key={i} flexWrap='wrap'>
        {week.map((day, i) => (
          <Box key={i} width={1/7}>
            <Day
              handleDateSelect={handleDateSelect}
              dayContents={day && getDate(day)}
              selected={
                isSameDay(day, startDate) ||
                isSameDay(day, endDate) ||
                (isBefore(day, endDate) && isAfter(day, startDate))
              }
              selectedStart={startDate && endDate && isSameDay(day, startDate)}
              selectedEnd={startDate && endDate && isSameDay(day, endDate)}
              selectedMiddle={
                startDate && endDate && isBefore(day, endDate) && isAfter(day, startDate)
              }
              day={day}
            />
          </Box>
        ))}
      </Flex>
    ))}
  </div>
));