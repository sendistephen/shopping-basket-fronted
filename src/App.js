import React, { Component, Fragment } from 'react';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Baskets from './components/baskets/baskets';
import PrivateRoute from './components/auth/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <Router>
          <Switch>
            <PrivateRoute exact path='/baskets' component={Baskets} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Register} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
