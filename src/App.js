import React, { Component, Fragment } from 'react';
import './App.css';
import Register from './components/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer />
        <Register />;
      </Fragment>
    );
  }
}

export default App;
