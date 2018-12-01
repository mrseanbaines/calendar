import React, { memo } from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  position: relative;
  padding-top: 100%;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default memo(props => (
  <Outer>
    <Inner>
      {props.children}
    </Inner>
  </Outer>
));
