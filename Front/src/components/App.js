import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as Pages from "../pages";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" render={() => <Pages.StartPage />} />
        <Route exact path="/" exact={true} render={() => <Pages.MainPage />} />
      </Switch>
    </>
  );
};

export default App;
