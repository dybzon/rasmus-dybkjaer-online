import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../utilities';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { DeviceContext } from '../../providers';

export const BarMenuItemComponent = props => (
  <DeviceContext.Consumer>
    {deviceInfo => (
    <StyledLink to={props.link}>
      <StyledMenuItem {...props} isTouch={deviceInfo.isTouch}>
        <StyledText>
          {props.text}
        </StyledText>
      </StyledMenuItem>
    </StyledLink>
    )}
  </DeviceContext.Consumer>);

const StyledMenuItem = styled.div`
  cursor: pointer;
  display: flex;
  height: 100%;

  /* We'll remove :hover effexts on touch devices */
  ${props => !props.isTouch && css`
    :hover {
      color: ${colors.mediumGreen};
      transition: color 0.3s;
    }`}

  ${props => (props.menuPosition === 'left' || props.menuPosition === 'right') && css`min-height: 3rem;`}
  ${props => (props.menuPosition === 'top' || props.menuPosition === 'bottom') && css`min-width: 10rem;`}
  ${props => props.location.pathname === props.link && css`background-color: ${colors.darkRose}; color: ${colors.mediumGreen};`}
`;

const StyledText = styled.div`
  margin: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkGrey};
`;

export const BarMenuItem = withRouter(BarMenuItemComponent);