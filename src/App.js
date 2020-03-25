import React, { Component, Fragment } from 'react';
import './App.css';
import Register from './components/auth/Register';
// import Login from './components/auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <Router>
          <Switch>
            {/* <Route path='/login' component={Login} /> */}
            <Route path='/' component={Register} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
