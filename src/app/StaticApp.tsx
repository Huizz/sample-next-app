import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import Form from 'app/pages/Form';
import Home from 'app/pages/Home';

const StaticApp: React.StatelessComponent<{}> = () => (
  <>
    <Switch>
      <Route exact={true} path="/client" component={Home} />
      <Route exact={true} path="/client/form" component={Form} />
    </Switch>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Demo app</title>
    </Helmet>
  </>
)

export default StaticApp;
