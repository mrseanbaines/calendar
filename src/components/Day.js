import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import SquareContainer from '~/components/SquareContainer';

const selectedStyles = css`
  content: '';
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const StyledBox = styled(Box)`
  width: 2em;
  line-height: 2;
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

  small {
    font-size: 0.8em;
  }
`;

const StyledFlex = styled(Flex)`
  cursor: pointer;
  overflow: hidden;

  :hover > ${StyledBox} {
    background: ${props => (
      props.selectedStart || props.selectedMiddle || props.selectedEnd ?
      props.theme.colors.whiteTransparent : props.theme.colors.mainTransparent
    )};
  }
`;

export default memo(({ dayContents, ...props }) => (
  <SquareContainer>
    <StyledFlex
      justifyContent='center'
      alignItems='center'
      style={{ height: '100%' }}
      {...props}
    >
      <StyledBox {...props} fontSize={[14, 16, 18, 20]}>
        {dayContents}
      </StyledBox>
    </StyledFlex>
  </SquareContainer>
));
