import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Start from './Start';
import StartContainer from 'container/StartContainer/StartContainer';
const App = () => {
  return (
    <>
      <StartContainer />
    </>
  );
};

export default App;
