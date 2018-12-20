import React, { memo } from 'react';
import styled, { css } from 'styled-components';
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
  color: ${props => props.isDaySelected ? themeGet('colors.white') : themeGet('colors.greys.1')};
  position: relative;
  user-select: none;

  ${props => (props.isDaySelected) && css`
    background: ${themeGet('colors.main')};
  `};

  ${props => (props.selectedStart || props.selectedMiddle || props.hoveredStart || props.hoveredMiddle) && css`
    ::after {
      ${selectedStyles};
      left: 50%;
    }
  `};

  ${props => (props.selectedEnd || props.selectedMiddle || props.hoveredEnd || props.hoveredMiddle) && css`
    ::before {
      ${selectedStyles};
      right: 50%;
    }
  `};

  ${props => (props.isDayHighlighted) && css`

    &::before,
    &::after {
      background: ${themeGet('colors.mainSelectedHover')};
    }
  `};
`;

const FlexOuterWrapper = styled(Flex)`
  cursor: pointer;
  overflow: hidden;
  height: 100%;

  :hover > ${FlexInnerWrapper} {
    background: ${props => (
      props.isDaySelected ? themeGet('colors.mainHover') : themeGet('colors.mainSelectedHover')
    )};
  }
`;

export default memo(({
  handleDateSelect,
  dayContents,
  isDaySelected,
  selectedStart,
  selectedEnd,
  selectedMiddle,
  day,
  handleMouseEnter,
  handleMouseLeave,
  isDayHighlighted,
  hoveredStart,
  hoveredEnd,
  hoveredMiddle,
}) => (
  <SquareContainer>
    {dayContents && (
      <FlexOuterWrapper
        onClick={() => handleDateSelect(day)}
        onMouseEnter={() => handleMouseEnter(day)}
        onMouseLeave={() => handleMouseLeave(day)}
        justifyContent='center'
        alignItems='center'
        isDaySelected={isDaySelected}
      >
        <FlexInnerWrapper
          fontSize={[16, 18, 20, 22]}
          justifyContent='center'
          alignItems='center'
          isDaySelected={isDaySelected}
          selectedStart={selectedStart}
          selectedEnd={selectedEnd}
          selectedMiddle={selectedMiddle}
          isDayHighlighted={isDayHighlighted}
          hoveredStart={hoveredStart}
          hoveredEnd={hoveredEnd}
          hoveredMiddle={hoveredMiddle}
        >
          {dayContents}
        </FlexInnerWrapper>
      </FlexOuterWrapper>
    )}
  </SquareContainer>
));
