import React, { useState, useEffect } from 'react';
import { signin, authenticate, isAuthenticated } from '../actions/auth';
import { Redirect, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

const Login = ({ history }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false,
  });
  useEffect(() => {
    // redirect to tasklist page if user is authenticated already
    isAuthenticated() && history.push('/baskets');
  });

  const { email, password, loading, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        toast.error(data.error);
      } else {
        // authenticate user
        authenticate(data, () => {
          setValues({ ...values, redirectToReferrer: true });
          toast.success(`Hi ${data.user.name}, Welcome back!`);
        });
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferrer && user) {
      return <Redirect to='/baskets' />;
    }
  };

  return (
    <div className='main'>
      {redirectUser()}
      <div className='d-flex'>
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
                  fontWeight: 'bold',
                }}
              >
                {' '}
                Login to get started.
              </p>
              <form onSubmit={handleSubmit}>
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

                <button type='submit' disabled={loading} className='btn btn-register btn-block'>
                  {loading && (
                    <Loader
                      type='ThreeDots'
                      color='#2BAD60'
                      height='25'
                      width='25'
                    />
                  )}
                  {!loading && <span>Login</span>}
                </button>
                <hr className='my-5' />
                <p className='lead text-center' style={{ color: '#ABBBC8' }}>
                  Already have an account?{' '}
                  <Link to='/' style={{ color: '#0071E2', fontWeight: '400' }}>
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
