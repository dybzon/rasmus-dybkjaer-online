import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../utilities';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

export const SquareMenuItemComponent = props => (
  <StyledLink to={props.link}>
    <SquareItemContainer borderColor={props.borderColor}>
      <SquareItemContent>
        {props.children}
      </SquareItemContent>
    </SquareItemContainer>
  </StyledLink>);

// We don't want custom link styling from the react router link
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.darkGrey};
`;

// A square div that maintains an aspect ratio of 1:1 between width and height.
const SquareItemContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  /* border: 1px solid ${props => (props.borderColor || colors.lightRose)}; */
  cursor: pointer;
`;

// The content of the square div should be centered
const SquareItemContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
`;

export const SquareMenuItem = withRouter(SquareMenuItemComponent);