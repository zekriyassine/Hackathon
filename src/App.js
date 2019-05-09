import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Vignette from './Components/Vignette';
import Student from './Components/Student';
import Terminal from './Components/Terminal';
import Form from './Components/Form/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Terminal />
      <Switch>
        <Route exact path="/" />
        <Route path="/home" component={Vignette} />
        <Route path="/student/:id" component={Student} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
