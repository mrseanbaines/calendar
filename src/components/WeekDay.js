import React, { memo } from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import SquareContainer from '~/components/SquareContainer';

const FlexWrapper = styled(Flex)`
  height: 100%;
  cursor: default;
  user-select: none;
  color: ${props => props.theme.colors.main};
`;

export default memo(({ dayContents, ...props }) => (
  <SquareContainer>
    <FlexWrapper
      justifyContent='center'
      alignItems='center'
      fontSize={[14, 16, 18, 20]}
      {...props}
    >
      {dayContents}
    </FlexWrapper>
  </SquareContainer>
));
