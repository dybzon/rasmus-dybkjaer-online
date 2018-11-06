import * as React from 'react';
import { BarMenuItem } from './BarMenuItem';
import rdlogo from '../../images/rd-logo.svg';
import styled, { css } from 'styled-components';
import { colors, isMobileBrowser } from '../../utilities';

export class BarMenu extends React.Component {
  state = { menuPosition: 'top' };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);

    window.addEventListener('ondeviceorientation', () => this.setState({ menuPosition: 'left' }));
    window.addEventListener('onmozorientation', () => this.setState({ menuPosition: 'right' }));
    window.addEventListener('ondevicemotion', () => this.setState({ menuPosition: 'bottom' }));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);

    window.removeEventListener('ondeviceorientation', () => this.setState({ menuPosition: 'left' }));
    window.removeEventListener('onmozorientation', () => this.setState({ menuPosition: 'right' }));
    window.removeEventListener('ondevicemotion', () => this.setState({ menuPosition: 'bottom' }));
  }

  render() {
    // We'll use the square menu for mobile clients
    if(isMobileBrowser()) {
      return (
        <MenuContainer menuPosition={this.state.menuPosition}>
          <MenuItemContainer menuPosition={this.state.menuPosition}>
            <BarMenuItem menuPosition={this.state.menuPosition} link="/" text="Menu" />
          </MenuItemContainer>
        </MenuContainer>);  
    }

    return (
      <MenuContainer menuPosition={this.state.menuPosition}>
        <StyledImage src={rdlogo} menuPosition={this.state.menuPosition} />
        <MenuItemContainer menuPosition={this.state.menuPosition}>
          <BarMenuItem menuPosition={this.state.menuPosition} link="/" text="rasmusdybkjaer" />
          <BarMenuItem menuPosition={this.state.menuPosition} link="/wishlist" text="Wishlist" />
          <BarMenuItem menuPosition={this.state.menuPosition} link="/socialmedia" text="Find me" />
          <BarMenuItem menuPosition={this.state.menuPosition} link="/coolstuff" text="Cool stuff!" />
          {isMobileBrowser && <BarMenuItem menuPosition={this.state.menuPosition} link="/snake" text="Play snake" />}
        </MenuItemContainer>
      </MenuContainer>);
  }

  handleKeydown = (e) => {
    const arrowKeyCodes = [37,38,39,40]; // left, up, right, down
    if(arrowKeyCodes.includes(e.keyCode)){
      switch(e.keyCode){
        case 37: //left
          this.setState({ menuPosition: 'left' });
          break;
        case 39: // right
          this.setState({ menuPosition: 'right' });
        break;
        case 40: // down
          this.setState({ menuPosition: 'bottom' });
          break;
        default:
        // case 38: // up
          this.setState({ menuPosition: 'top' });
          break;
      }
    }
  }
}

// Styled component for the logo
const StyledImage = styled.img`
  ${props => (props.menuPosition === 'top' || props.menuPosition === 'bottom') &&
    css`height: 100%;
      position: 'absolute';
      top: 0; 
      left: 0;`}
  ${props => (props.menuPosition === 'left' || props.menuPosition === 'right') &&
    css`width: 100%;`}
`;

// Styled component to hold menu items
const MenuItemContainer = styled.div`
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  /* Top and bottom menus */
  ${props => (props.menuPosition === 'top' || props.menuPosition === 'bottom') &&
    css`justify-content: center;
    position: absolute;`}

  /* Left and right menus */
  ${props => (props.menuPosition === 'left' || props.menuPosition === 'right') && 
    css`flex-direction: column;
    justify-content: flex-start;
    margin-top: 1rem;`}
`;

// Styled component to hold the entire menu
const MenuContainer = styled.div`
  display: relative;
  background-color: ${colors.lightRose};
  z-index: 100;
  transition: all .5s ease-out;

  /* Top and bottom menus */
  ${props => (props.menuPosition === 'top' || props.menuPosition === 'bottom') &&
    css`width: 100%;
    height: 4rem;`}
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
    height: 100vh;`}
  ${props => props.menuPosition === 'left' && `left: 0;`}
  ${props => props.menuPosition === 'right' && `left: calc(100% - 10rem);`}     
`;
