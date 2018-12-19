import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from 'styled-system';
import { Flex } from '@rebass/grid';
import { SquareContainer } from '~/components/Containers';

const selectedStyles = css`
  content: '';
  background: ${themeGet('colors.main')};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const FlexInnerWrapper = styled(Flex)`
  width: 2.5em;
  height: 2.5em;
  border-radius: ${themeGet('radii.4')};
  text-align: center;
  color: ${props => props.selected ? themeGet('colors.white') : themeGet('colors.greys.1')};
  background: ${props => props.selected && themeGet('colors.main')};
  position: relative;
  user-select: none;

  ${props => props.selected && (props.selectedStart || props.selectedMiddle) && css`
    ::after {
      ${selectedStyles};
      left: 50%;
    }
  `};

  ${props => props.selected && (props.selectedEnd || props.selectedMiddle) && css`
    ::before {
      ${selectedStyles};
      right: 50%;
    }
  `};
`;

const FlexOuterWrapper = styled(Flex)`
  cursor: pointer;
  overflow: hidden;

  :hover > ${FlexInnerWrapper} {
    background: ${props => (
      props.selected ? themeGet('colors.mainHover') : themeGet('colors.mainSelectedHover')
    )};
  }
`;

export default memo(({ dayContents, handleDateSelect, day, ...props }) => (
  <SquareContainer>
    {dayContents && (
      <FlexOuterWrapper
        onClick={() => handleDateSelect(day)}
        justifyContent='center'
        alignItems='center'
        style={{ height: '100%' }}
        {...props}
      >
        <FlexInnerWrapper
          {...props}
          fontSize={[16, 18, 20, 22]}
          justifyContent='center'
          alignItems='center'
        >
          {dayContents}
        </FlexInnerWrapper>
      </FlexOuterWrapper>
    )}
  </SquareContainer>
));
