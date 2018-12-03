import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../utilities';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import pin from '../../images/pin.svg';
import { jump } from '../../animations';
import { DeviceContext } from '../../providers';

export const FullMenuItemComponent = props => (
  <DeviceContext.Consumer>
    {deviceInfo => (
      <StyledLink to={props.link}>
        <ItemContainer borderColor={props.borderColor} isTouch={deviceInfo.isTouch}>
          <MenuItemAnimation icon={props.icon} isTouch={deviceInfo.isTouch} />
          <ItemContent isTouch={deviceInfo.isTouch}>
            {props.text}
          </ItemContent>
        </ItemContainer>
      </StyledLink>
    )}
  </DeviceContext.Consumer>);
  
// We don't want custom link styling from the react router link
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkGrey};
`;

// A square div that maintains an aspect ratio of 1:1 between width and height.
const ItemContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: ${colors.mediumGreen};
  transition: background-color .3s linear;

  ${props => !props.isTouch && css`
    :hover {
      background-color: ${colors.lightGreen};
    }`
  }
`;

const ItemContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  text-align: center;

  ${props => !props.isTouch && css`
    ${ItemContainer}:hover & {
      display: none;
    }`
  }
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
    ${ItemContainer}:hover & {
      display: block;
    }`
  }
`;

export const FullMenuItem = withRouter(FullMenuItemComponent);