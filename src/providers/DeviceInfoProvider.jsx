import React from 'react';

export const DeviceContext = React.createContext({ isTouch: false });
export class DeviceInfoProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastTouchTime: new Date(),
      isTouch: false,
      alpha: 0,
      beta: 0,
      gamma: 0,
    };
  }

  // We want to allow components in our app to behave differently depending on whether we're
  // on a touch device or a "mouse" device.
  // Some devices can be both (touch and mouse), and therefore the value must be
  // set dynamically based on what was used last.
  componentDidMount() {
    // Catch info about whether the user uses touch or mouse for input
    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('mousemove', this.handleMouseMove);

    // Catch info about device orientation, if on an eligible device
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.handleOrientation);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('mousemove', this.handleMouseMove);
    if (window.DeviceOrientationEvent) {
      window.removeEventListener('deviceorientation', this.handleOrientation);
    }
  }

  render() {
    return (
      <DeviceContext.Provider value={{...this.state}}>
        {this.props.children}
      </DeviceContext.Provider>
    );
  }

  handleTouchStart = () => {
    this.setState({
      lastTouchTime: new Date(),
      isTouch: true,
    });
  }

  handleMouseMove = () => {
    // Return if this is most likely an emulated mousemove event from a touch event
    if(new Date() - this.state.lastTouchTime < 500) return; 
    this.setState({
      isTouch: false,
    })
  }

  handleOrientation = ({ alpha, beta, gamma }) => {
    this.setState({ alpha, beta, gamma });
  }
}
