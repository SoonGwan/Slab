import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Start from './Start';
import * as Pages from '../pages';
import StartContainer from 'container/StartContainer/StartContainer';
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" render={() => <Pages.StartPage />} />
      </Switch>
    </>
  );
};

export default App;
