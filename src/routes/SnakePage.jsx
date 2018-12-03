import * as React from 'react';
import background from '../images/snake-background.svg';
import { Background } from '../components';

export class SnakePage extends React.Component {
  componentWillMount() {
    // Start playing snake
    this.props.playSnake && this.props.playSnake();
  }
  
  render() {
    return <Background background={`url(${background})`} height={'calc(100vh - 4rem)'}></Background>
  }
}