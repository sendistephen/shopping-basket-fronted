import React, { Component } from 'react';
import * as userService from '../../services/userService';
import { toast } from 'react-toastify';

class Register extends Component {
  state = {
    data: {
      name: '',
      email: '',
      password: ''
    },
    errors: {}
  };

  onChange = e => {
    const { name, value } = e.target;
    // clone the state obj
    let data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });
  };
  onSubmit = async e => {
    e.preventDefault();

    try {
      const result = await userService.register(this.state.data);
      if (result) {
        toast.success('User registered successfully');

        this.props.history.push('/login');
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let errors = { ...this.state.errors };
        errors.data = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    const { name, email, password } = this.state.data;
    return (
      <div className='main'>
        <div className='d-flex'>
          <a
            className='main-login-btn btn btn-outline-secondary shadow'
            href='#'
          >
            Log in
          </a>
          <div className='main-left-side d-flex'>
            <h1
              className='pl-5 align-items-center align-self-center'
              style={{ fontSize: '68px', fontWeight: '900' }}
            >
              Shopping <br /> Basket.
            </h1>
          </div>
          <div className='main-right-side'>
            <div
              className='card rounded-lg shadow'
              style={{ width: '28rem', borderColor: '#C4CFDB' }}
            >
              <div className='card-body'>
                <p
                  className='lead py-3'
                  style={{
                    color: '#3D4852',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                >
                  {' '}
                  Register to get started.
                </p>
                <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control form-rounded'
                      name='name'
                      placeholder='Username'
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
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
                    Register
                  </button>
                  <hr className='my-5' />
                  <p className='lead text-center' style={{ color: '#ABBBC8' }}>
                    Already have an account?{' '}
                    <a style={{ color: '#0071E2', fontWeight: '400' }} href='#'>
                      Login
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
