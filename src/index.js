import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

<<<<<<< HEAD
ReactDOM.render(
    <BrowserRouter>   
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
=======

ReactDOM.render(
<BrowserRouter>   
<App />
</BrowserRouter> 
, document.getElementById('root'));

>>>>>>> d496dbae02d48dfbb13f77279544bfcf344aa654
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
