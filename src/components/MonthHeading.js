import React, { memo } from 'react';
import styled from 'styled-components';
import { fontSize } from 'styled-system';

const StyledMonthHeading = styled.h2`
  ${fontSize};
  cursor: default;
  user-select: none;
  color: ${props => props.theme.colors.greys[0]};
  text-transform: uppercase;
`;

export default memo(({ children }) => (
  <StyledMonthHeading fontSize={[16, 18, 20, 22]}>
    {children}
  </StyledMonthHeading>
));
