import React, { memo } from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

const StyledLoader = styled.div`
  width: 1em;
  height: 1em;
  background: ${props => props.theme.colors.greys[0]};
  border-radius: 50%;
  margin: 0.4em;
`;

export default memo(() => (
  <Flex
    justifyContent='center'
    alignItems='center'
    style={{ height: '100vh' }}
  >
    <StyledLoader />
    <StyledLoader />
    <StyledLoader />
  </Flex>
));
