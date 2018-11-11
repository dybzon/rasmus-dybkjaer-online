import React, { Component } from 'react';
import { Content, Menu } from './components';
import { DeviceInfoProvider } from './providers';
import { SocialMedia, Wishlist, Home, CoolStuff, SnakePage } from './routes';
import Snake from 'react-snake-overlay';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { playSnake: false, };
  }

  render() {
    return (
      <Router>
        <DeviceInfoProvider>
          <Menu />
          <Content>
            <Route exact path="/" component={Home} />
            <Route exact path="/wishlist" component={Wishlist} />
            <Route path="/socialmedia" component={SocialMedia} />
            <Route path="/coolstuff" component={CoolStuff} />
            <Route path="/snake" render={props => <SnakePage playSnake={this.playSnake} />} />
          </Content>
          {this.state.playSnake && <Snake />}
        </DeviceInfoProvider>
      </Router>
    );
  }

  playSnake = () => {
    this.setState({ playSnake: true });
  }
}

export default App;
