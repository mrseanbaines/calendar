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

  ${props => (props.isDayHighlighted) && css`
    background: ${themeGet('colors.mainSelectedHover')};
  `};

  ${props => (props.isDaySelected) && css`
    background: ${themeGet('colors.main')};
  `};

  ${props => (props.selectedStart || props.selectedMiddle) && css`
    ::after {
      ${selectedStyles};
      left: 50%;
    }
  `};

  ${props => (props.selectedEnd || props.selectedMiddle) && css`
    ::before {
      ${selectedStyles};
      right: 50%;
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
  handleDateHover,
  isDayHighlighted,
}) => (
  <SquareContainer>
    {dayContents && (
      <FlexOuterWrapper
        onClick={() => handleDateSelect(day)}
        onMouseEnter={e => handleDateHover(day, e)}
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
        >
          {dayContents}
        </FlexInnerWrapper>
      </FlexOuterWrapper>
    )}
  </SquareContainer>
));
