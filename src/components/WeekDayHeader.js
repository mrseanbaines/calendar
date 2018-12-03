import React, { memo } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { format } from 'date-fns';
import WeekDay from '~/components/WeekDay';

const FlexWeekDayHeader = styled(Flex)`
  position: fixed;
  z-index: 1;
`;

export default memo(({ week }) => (
  <FlexWeekDayHeader width={1}>
    {week.map(day => (
      <Box key={format(day, 'dd')} width={1/7}>
        <WeekDay weekDayContents={format(day, 'dd').slice(0, 1)} />
      </Box>
    ))}
  </FlexWeekDayHeader>
));
