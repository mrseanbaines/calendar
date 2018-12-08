import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '@rebass/grid';
import { SquareContainer } from '~/components/Containers';

const selectedStyles = css`
  content: '';
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const FlexInnerWrapper = styled(Flex)`
  width: 2.5em;
  height: 2.5em;
  border-radius: ${props => props.theme.radii[4]};
  text-align: center;
  color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.greys[1]};
  background: ${props => props.selected && props.theme.colors.main};
  position: relative;
  user-select: none;

  ${props => props.selected && (props.selectedStart || props.selectedMiddle) && css`
    ::after {
      ${selectedStyles};
      left: 0;
      border-right: 9999em solid ${props.theme.colors.main};
      border-top-left-radius: ${props => props.theme.radii[4]};
      border-bottom-left-radius: ${props => props.theme.radii[4]};
    }
  `}

  ${props => props.selected && (props.selectedEnd || props.selectedMiddle) && css`
    ::before {
      ${selectedStyles};
      right: 0;
      border-left: 9999em solid ${props.theme.colors.main};
      border-top-right-radius: ${props => props.theme.radii[4]};
      border-bottom-right-radius: ${props => props.theme.radii[4]};
    }
  `}
`;

const FlexOuterWrapper = styled(Flex)`
  cursor: pointer;
  overflow: hidden;

  :hover > ${FlexInnerWrapper} {
    background: ${props => (
      props.selected ? props.theme.colors.mainHover : props.theme.colors.mainSelectedHover
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
