import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';
import Login from './Components/Login/login';
import SignUp from './Components/Signup/signup';
import Dashboard from './Components/Dashboard/dashboard';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {persistor,store} from './store'

require('dotenv').config();
const hist = createBrowserHistory();

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <Router history={hist}> 
<Switch> 
  <Route path="/signup" render={(props) => <SignUp {...props} />} /> 
  <Route path="/login" render={(props) => <Login {...props} />} />
  <Route path="/" render={(props) => <Dashboard  {...props} />} />

</Switch>
</Router>
</PersistGate>
</Provider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
