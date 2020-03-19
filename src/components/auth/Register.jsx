import React, { Component } from 'react';

class Register extends Component {
  state = {};
  render() {
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
              className='card shadow'
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
                <form>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control form-rounded'
                      name='username'
                      id='username'
                      placeholder='Username'
                    />
                  </div>
                  <div className='form-group form-rounded'>
                    <input
                      type='email'
                      className='form-control form-rounded'
                      name='email'
                      id='email'
                      placeholder='Email'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control form-rounded'
                      name='password'
                      id='password'
                      placeholder='Password'
                    />
                  </div>
                  <button type='submit' class='btn btn-register btn-block'>
                    Register
                  </button>
                  <p
                    className='lead text-center pt-4'
                    style={{ color: '#ABBBC8' }}
                  >
                    <hr />
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
