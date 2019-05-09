import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Vignette from './Components/Vignette';
import Student from './Components/Student/index';
import Form from './Components/Form/index';
import Temp from './Components/Temp/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
        <Route path="/home" component={Vignette} />
        <Route path="/student/:id" component={Student} />
        <Route path="/form" component={Form} />
        <Route path="/temp" component={Temp} />
      </Switch>
    </div>
  );
}

export default App;
