import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BarMenu } from './BarMenu';
import { FullMenu } from './FullMenu';

// We want to render our regular BarMenu on all pages except the index page
// On the index page we'll render a full screen menu to guide the user to the desired route
export const Menu = () => (
  <Switch>
    <Route exact path='/' component={FullMenu} />
    <Route path='/*' component={BarMenu} />
  </Switch>
)