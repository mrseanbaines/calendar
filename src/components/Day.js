import React, { memo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { themeGet } from 'styled-system';
import { Flex } from '@rebass/grid';
import { SquareContainer } from '~/components/Containers';

const selectedStyles = css`
  content: '';
  background: ${themeGet('colors.main')};
  height: 100%;
  width: ${themeGet('radii.4')};
  position: absolute;
  top: 0;
  z-index: -1;
`;

const FlexInnerWrapper = styled(Flex)`
  width: 2.5em;
  height: 2.5em;
  border-radius: ${themeGet('radii.4')};
  text-align: center;
  color: themeGet('colors.greys.1');
  position: relative;
  user-select: none;

  &.start,
  &.mid {
    ::after {
      ${selectedStyles};
      left: 50%;
    }
  }

  &.end,
  &.mid {
    ::before {
      ${selectedStyles};
      right: 50%;
    }
  }

  &.hovered {
    &,
    &::after,
    &::before {
      background: ${themeGet('colors.mainSelectedHover')};
    }
  }

  &.selected {
    background-color: ${themeGet('colors.main')};
    color: ${themeGet('colors.white')};
  }
`;

const FlexOuterWrapper = styled(Flex)`
  cursor: pointer;
  overflow: hidden;
  height: 100%;

  :hover > ${FlexInnerWrapper} {
    background: ${themeGet('colors.mainSelectedHover')};

    &.selected {
      background: ${themeGet('colors.mainHover')};
    }
  }
`;

const splash = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }

  50% {
    transform: scale(1.2);
    opacity: 1;
  }

  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`;

const Splash = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1);
  opacity: 0;

  .selected:not(.mid) & {
    animation: ${splash} 600ms ease;
  }
`;

export default memo(({
  day,
  dayContents,
  handleDateSelect,
  handleMouseEnter,
}) => (
  <SquareContainer>
    {dayContents && (
      <FlexOuterWrapper
        onClick={() => handleDateSelect(day)}
        onMouseEnter={() => handleMouseEnter(day)}
        justifyContent='center'
        alignItems='center'
      >
        <FlexInnerWrapper
          fontSize={[16, 18, 20, 22]}
          justifyContent='center'
          alignItems='center'
          data-date={day}
          className='day'
        >
          <Splash src="assets/images/splash.svg" alt="" />
          {dayContents}
        </FlexInnerWrapper>
      </FlexOuterWrapper>
    )}
  </SquareContainer>
));
