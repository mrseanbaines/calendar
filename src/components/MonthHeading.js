import React, { memo } from 'react';
import styled from 'styled-components';
import { fontSize } from 'styled-system';
import { format } from 'date-fns';
import { Flex } from '@rebass/grid';
import { FullWidthContainer } from '~/components/Containers';

const StyledMonthHeading = styled.h2`
  ${fontSize};
  cursor: default;
  user-select: none;
  color: ${props => props.theme.colors.greys[0]};
  text-transform: uppercase;
`;

export default memo(({ month, id }) => (
  <FullWidthContainer id={id}>
    <Flex justifyContent='center' alignItems='center' style={{ height: '100%' }}>
      <StyledMonthHeading fontSize={[16, 18, 20, 22]}>
        {format(month.date, 'MMM YYYY')}
      </StyledMonthHeading>
    </Flex>
  </FullWidthContainer>
));
