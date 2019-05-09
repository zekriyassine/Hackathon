import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Vignette from './Components/Vignette';
import Form from './Components/Form/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Form/>
      <Switch>
        <Route exact path="/" />
        <Route path="/home" component={Vignette} />
        <Route path="/student" />
        <Route path="/form" />
      </Switch>
    </div>
  );
}

export default App;
