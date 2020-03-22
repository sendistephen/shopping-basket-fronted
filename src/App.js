import React, { Component, Fragment } from 'react';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Register} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
