import React, { memo } from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { SquareContainer } from '~/components/Containers';

const FlexWrapper = styled(Flex)`
  height: 100%;
  cursor: default;
  user-select: none;
  color: ${props => props.theme.colors.main};
  background: ${props => props.theme.colors.white};
`;

export default memo(({ weekDayContents }) => (
  <SquareContainer>
    <FlexWrapper
      justifyContent='center'
      alignItems='center'
      fontSize={[16, 18, 20, 22]}
    >
      {weekDayContents}
    </FlexWrapper>
  </SquareContainer>
));
