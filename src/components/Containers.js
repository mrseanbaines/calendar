import React, { memo } from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  position: relative;
  padding-top: ${props => props.isFullWidth ? 'calc(100% / 7)' : '100%'};
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = isFullWidth => memo(props => (
  <Outer isFullWidth={isFullWidth} {...props}>
    <Inner>
      {props.children}
    </Inner>
  </Outer>
));

export const SquareContainer = Container();
export const FullWidthContainer = Container(true);
