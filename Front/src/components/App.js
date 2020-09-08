import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from '../pages';
import Token from 'lib/Token';
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" render={() => <Pages.StartPage />} />
        <Route
          exact
          path="/"
          render={() =>
            Token() !== 'empty' ? (
              <Pages.MainPage />
            ) : (
              <Redirect to={'/login'} />
            )
          }
        />
      </Switch>
    </>
  );
};

export default App;
