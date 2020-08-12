import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import Error404 from './pages/Error404';

class MainRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/work'} component={WorkPage} />
          <Route exact path={'/work/:workType'} component={WorkPage} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
