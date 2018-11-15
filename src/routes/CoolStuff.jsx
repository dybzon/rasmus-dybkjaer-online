import * as React from 'react';
import { DeviceContext } from '../providers';
import circles from '../images/circles-split.png';
import { Panorama } from '../components';
import styled from 'styled-components';

export class CoolStuff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alpha: 0,
    }
  }

  render() {
    return (
    <DeviceContext.Consumer>
      {deviceInfo => (
        <Panorama 
          alpha={deviceInfo.alpha !== null ? deviceInfo.alpha : this.state.alpha} // Use the device orientation if possible
          imageSrc={circles} 
          onClick={this.handleClick}>
          <PanoramaButton top={500} left={2000}></PanoramaButton>
          <PanoramaButton top={200} left={1000}></PanoramaButton>
          <PanoramaButton top={20} left={400}></PanoramaButton>
        </Panorama>
        )}
    </DeviceContext.Consumer>);
  }

  handleClick = () => {
    this.setState({ alpha: this.state.alpha > 350 ? 0 : this.state.alpha + 10 });
  }
}

const PanoramaButton = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  background-color: blue;
  user-select: none;
`;