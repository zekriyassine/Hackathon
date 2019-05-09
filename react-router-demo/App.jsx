import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contactez-nous" component={Contact} />
              </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
