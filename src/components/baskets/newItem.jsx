import React, { useState, useEffect, Fragment } from 'react';
import { isAuthenticated } from '../actions/auth';
import NavBar from '../layout/navbar';
import Footer from '../layout/footer';
import { createBasket } from '../actions/basket';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import { createItem } from '../actions/items';
import { Redirect } from 'react-router-dom';

const NewItem = ({ history, match }) => {
  const [values, setValues] = useState({
    name: '',
    error: '',
    loading: false,
    redirect: false,
  });

  useEffect(() => {
    !isAuthenticated() && history.push('/login');
  });

  const { name, loading, redirect } = values;
  const { token } = isAuthenticated();

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value, error: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name };
    setValues({ ...values, error: '', loading: true });

    createItem(token, match.params.basketId, newItem).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        toast.error(data.error);
      } else {
        setValues({
          name: '',
          error: false,
          loading: false,
          redirect: true,
        });
        toast.success('Added successfully!');
      }
    });
  };
  if (redirect) {
    return <Redirect to={`/basket/${match.params.basketId}`} />;
  }
  return (
    <Fragment>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <div className='mt-5'>
              <p className='lead text-dark font-weight-normal mb-3'>
                Add new item to basket to collection
              </p>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label className='text-secondary text-sm_1' htmlFor='name'>
                    Name
                  </label>
                  <input
                    onChange={handleChange('name')}
                    value={name}
                    name='name'
                    type='text'
                    className='form-control form-control-sm'
                    required
                  />
                </div>

                <button
                  type='submit'
                  disabled={loading}
                  className='btn btn-dark btn-sm'
                >
                  {loading && (
                    <Loader
                      type='ThreeDots'
                      color='#2BAD60'
                      height='25'
                      width='25'
                    />
                  )}
                  {!loading && <span>Save</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default NewItem;
