import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route path="/home" />
        <Route path="/student" />
        <Route path="/form" />
      </Switch>
    </div>
  );
}

export default App;
