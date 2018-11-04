import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../utilities';

export class BarMenuContainer extends React.Component {
  render() {
    return (
      <StyledMenuContainer {...this.props}>{this.props.children}</StyledMenuContainer>
    );
  }
}

const StyledMenuContainer = styled.div`
  display: flex;
  background-color: ${colors.lightRose};
  transition: all .5s ease-out;

  /* Top and bottom menus */
  ${props => (props.menuPosition === 'top' || props.menuPosition === 'bottom') &&
    css`width: 100%;
    height: 4rem;
    justify-content: center;`}
  ${props => props.menuPosition === 'top' && 
    css`position: sticky;
    top: 0;
    margin-bottom: 4px;`}
  ${props => props.menuPosition === 'bottom' && 
    css`position: fixed;
    top: calc(100vh - 4rem);
    transform: rotateX(180deg);`}

  /* Left and right menus */
  ${props => (props.menuPosition === 'left' || props.menuPosition === 'right') && 
    css`position: fixed;
    top: 0;
    width: 10rem;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;`}
  ${props => props.menuPosition === 'left' && `left: 0;`}
  ${props => props.menuPosition === 'right' && `left: calc(100% - 10rem);`}     
`;

