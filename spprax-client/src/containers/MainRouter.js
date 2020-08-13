import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import WorkSplashPage from './pages/WorkSplashPage';
import Error404 from './pages/Error404';
import TermsConditionsPage from './pages/TermsConditionsPage';

class MainRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage} />

          <Route exact path={'/work/:workType'} component={WorkPage} />

          <Route exact path={'/terms-conditions'} component={TermsConditionsPage} />
          <Route exact path={'/error404'} component={Error404} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MainRouter;
