import * as React from 'react';
import { DeviceContext } from '../providers';

export class CoolStuff extends React.Component {
  render() {
    return (
    <DeviceContext.Consumer>
      {deviceInfo => (
        <div>{deviceInfo.alpha}</div>
        )}
    </DeviceContext.Consumer>);
  }
}
