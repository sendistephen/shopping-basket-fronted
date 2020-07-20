import React, { Component, Fragment } from 'react';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Baskets from './components/baskets/baskets';
import PrivateRoute from './components/auth/PrivateRoute';
import BasketDetails from './components/baskets/basketDetails';
import NewBasket from './components/baskets/newBasket';
import UpdateBasket from './components/baskets/updateBasket';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <Router>
          <Switch>
            <PrivateRoute exact path='/basket/new' component={NewBasket} />
            <PrivateRoute
              exact
              path='/basket/update/:basketId'
              component={UpdateBasket}
            />
            <PrivateRoute
              exact
              path='/basket/:basketId'
              component={BasketDetails}
            />
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
