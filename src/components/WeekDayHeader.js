import React, { memo } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { format } from 'date-fns';
import WeekDay from '~/components/WeekDay';
import { FullWidthContainer } from '~/components/Containers';

const FlexWeekDayHeader = styled(Flex)`
  position: fixed;
  z-index: 1;
`;

export default memo(({ week, weekDayFormat, singleLetterWeekDay }) => (
  <FullWidthContainer>
    <FlexWeekDayHeader width={1}>
      {week.map(day => (
        <Box key={format(day, 'dd')} width={1/7}>
          <WeekDay
            weekDayContents={
              format(day, weekDayFormat).slice(0, singleLetterWeekDay ? 1 : day.length)
            }
          />
        </Box>
      ))}
    </FlexWeekDayHeader>
  </FullWidthContainer>
));
