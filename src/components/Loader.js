import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Flex } from '@rebass/grid';

const loading = keyframes`
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(0);
  }
`;

const StyledLoader = styled.div`
  width: 0.8em;
  height: 0.8em;
  background: ${props => props.theme.colors.greys[0]};
  border-radius: 50%;
  margin: 0.2em;
  ${({ delay }) => css`
  animation: ${loading} 800ms ${delay} ease-in infinite;
`}
`;

export default memo(() => (
  <Flex
    justifyContent='center'
    alignItems='center'
    style={{ height: '100vh' }}
  >
    <StyledLoader delay="0ms" />
    <StyledLoader delay="150ms" />
    <StyledLoader delay="300ms" />
  </Flex>
));
