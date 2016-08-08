import React from 'react';
import { Route } from 'react-router';

import App from './App';
import HelloWorld from './HelloWorld';

export default (
  <Route path="/" component={App}>
    <Route path="/hello-world" component={HelloWorld} />
  </Route>
);

