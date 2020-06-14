import React, { useState, useEffect } from 'react';
import { register } from '../actions/auth';
import { toast } from 'react-toastify';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    open: false,
  });
  // destructure state
  const { name, email, password, loading, open } = values;

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
      error: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // set values in the state before submit
    setValues({ ...values, loading: true, error: false });
    // create a user object
    const user = { name, email, password };

    // make an api request to the server
    register(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        toast.error(data.error);
      } else {
        setValues({
          name: '',
          email: '',
          password: '',
          error: '',
          loading: false,
          open: true,
        });
        toast.success(data.msg);
      }
    });
  };
  const showLoading = () =>
    loading ? <div className='alert alert-info'>Loading...</div> : '';

  return (
    <div className='main'>
      <div className='d-flex'>
        <a className='main-login-btn btn btn-outline-secondary shadow' href='#'>
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
          {showLoading()}

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
                  fontWeight: 'bold',
                }}
              >
                {' '}
                Register to get started.
              </p>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-rounded'
                    name='name'
                    placeholder='Username'
                    value={name}
                    onChange={handleChange('name')}
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
                    onChange={handleChange('email')}
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
                    onChange={handleChange('password')}
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
};

export default Register;
