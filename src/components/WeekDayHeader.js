import React, { memo, Fragment } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import { format } from 'date-fns';
import WeekDay from '~/components/WeekDay';
import SquareContainer from '~/components/SquareContainer';

const FlexWeekDayHeader = styled(Flex)`
  position: fixed;
  z-index: 1;
`;

export default memo(({ week, weekDayFormat, singleLetterWeekDay }) => (
  <Fragment>
    <FlexWeekDayHeader width={1}>
      {week.map(day => (
        <Box key={format(day, 'dd')} width={1/7}>
          <WeekDay
            weekDayContents={format(day, weekDayFormat).slice(0, singleLetterWeekDay ? 1 : day.length)}
          />
        </Box>
      ))}
    </FlexWeekDayHeader>
    <Box width={1/7}>
      <SquareContainer />
    </Box>
  </Fragment>
));
