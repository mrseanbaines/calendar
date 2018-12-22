import React, { memo } from 'react';
import { Flex, Box } from '@rebass/grid';
import { getDate } from 'date-fns';
import Day from '~/components/Day';

export default memo(({
  id,
  month,
  handleDateSelect,
  handleMouseEnter,
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
                handleMouseEnter={handleMouseEnter}
              />
            </Box>
          );
        })}
      </Flex>
    ))}
  </div>
));
