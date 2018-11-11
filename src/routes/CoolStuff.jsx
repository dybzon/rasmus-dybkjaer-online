import * as React from 'react';
import { DeviceContext } from '../providers';
import finger from '../images/rasmus_finger.png';

// Add info about shortcuts and other custom stuff that can be triggered on this site
export class CoolStuff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alpha: 0, beta: 0, gamma: 0,
    };
  }

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", this.handleOrientation);
    }
    const bodyStyle = document.querySelector('body').style;
    bodyStyle.backgroundSize = 'cover';
    bodyStyle.backgroundRepeat = 'no-repeat';
  }

  componentWillUnmount() {
    if (window.DeviceOrientationEvent) {
      window.removeEventListener("deviceorientation", this.handleOrientation);
    }
  }

  render() {
    const { alpha, beta, gamma } = this.state;
    return (<DeviceContext.Consumer>
      {deviceInfo => (<>
        <div>-- Under construction --</div>
        <div>Alpha: {alpha}</div>
        <div>Beta: {beta}</div>
        <div>Gamma: {gamma}</div>
        <div>DeviceInfo: {deviceInfo.isTouch ? 'touch' : 'no touch'}</div>
      </>)}
    </DeviceContext.Consumer>);
  }

  handleOrientation = ({ alpha, beta, gamma }) => {
    this.setState({ alpha, beta, gamma })

    // Do some random shizzle when looking up
    if(beta > 150 || beta < -150) {
      document.querySelector('body').style.backgroundImage = `url(${finger})`;
    }
    else {
      document.querySelector('body').style.backgroundImage = 'none';      
    }
  }    
}
