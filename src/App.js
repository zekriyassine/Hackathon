import React from 'react';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import Vignette from './Components/Vignette';
import Student from './Components/Student/index';
import Form from './Components/Form/index';
import Temp from './Components/Temp/index';
import Portal from './Components/Portal/index';


function App() {
  return (
    <div className="App">
      <Portal />
      <Switch>
        <Route exact path="/" component={Portal} />
        <Route path="/home" component={Vignette} />
        <Route path="/student/:id" component={Temp} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
