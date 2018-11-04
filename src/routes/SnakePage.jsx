import * as React from 'react';

export class SnakePage extends React.Component {
  componentWillMount() {
    // Start playing snake
    this.props.playSnake && this.props.playSnake();
  }

  render() {
    return null;
  }
}