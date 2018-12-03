import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../utilities';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { DeviceContext } from '../../providers';
import pin from '../../images/pin.svg';
import { jump } from '../../animations';

export const BarMenuItemComponent = props => (
  <DeviceContext.Consumer>
    {deviceInfo => (
    <StyledLink to={props.link}>
      <StyledMenuItem {...props} isTouch={deviceInfo.isTouch}>
        <MenuItemAnimation icon={props.icon} isTouch={deviceInfo.isTouch} />
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
  position: relative;
  height: 100%;

  /* We'll remove :hover effects on touch devices */
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
  ${props => !props.isTouch && css`
    ${StyledMenuItem}:hover & {
        display: none;
    }`
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkGrey};
`;

const MenuItemAnimation = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${props => props.icon || pin}) no-repeat center;
  background-size: auto 50%;
  animation: ${jump} .8s linear;
  display: none;

  ${props => !props.isTouch && css`
    ${StyledMenuItem}:hover & {
      display: block;
    }`
  }
`;

export const BarMenuItem = withRouter(BarMenuItemComponent);