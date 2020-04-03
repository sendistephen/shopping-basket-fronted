import React, { Component } from 'react';
import { login, getCurrentUser } from '../../services/authService';
import { Redirect, Link } from 'react-router-dom';

class Login extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: {},
  };

  onChange = (e) => {
    const { name, value } = e.target;
    let data = { ...this.state.data };
    data[name] = value;
    this.setState({
      data,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state.data;
    try {
      await login(email, password);
      const { state } = this.props.location;

      window.location = state ? state.from.pathname : '/baskets';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.data = ex.response.data;
        this.setState({ errors });
      } else {
        this.setState({
          data: {
            email: '',
            password: '',
            errors: '',
          },
          errors: '',
        });
      }
    }
  };

  render() {
    const { email, password } = this.state.data;
    if (getCurrentUser()) {
      return <Redirect to='/baskets' />;
    }
    return (
      <div className='container'>
        <div className='card' style={{ width: '40%', margin: '70px auto' }}>
          <div className='card-body'>
            <h5 className='card-title text-center font-weight-bold'>
              Shopping Basket
            </h5>
            <p className='card-text text-center lead mb-5'>
              Welcome back. Please log in here.
            </p>

            <form onSubmit={this.onSubmit}>
              <div className='form-group form-rounded'>
                <input
                  type='email'
                  className='form-control form-rounded'
                  name='email'
                  id='email'
                  placeholder='Email'
                  value={email}
                  onChange={this.onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control form-rounded'
                  name='password'
                  id='password'
                  placeholder='Password'
                  value={password}
                  onChange={this.onChange}
                />
              </div>
              <button type='submit' className='btn btn-register btn-block'>
                Log In
              </button>
              <hr className='my-4' />
              <p className='lead text-center' style={{ color: '#ABBBC8' }}>
                Don't have an account?{' '}
                <Link style={{ color: '#0071E2', fontWeight: '400' }} to={'/'}>
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
