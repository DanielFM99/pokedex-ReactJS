import React from "react";
import { Switch, Route } from "react-router-dom";

import Content from "./Content/Content";
import Favorites from "./Favorites/Favorites";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={() => <Content />} exact />
        <Route path="/favoritos" render={() => <Favorites />} />
      </Switch>
    );
  }
}

export default Routes;
