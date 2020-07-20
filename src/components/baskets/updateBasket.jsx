import React, { useState, useEffect, Fragment } from 'react';
import { updateBasket, basketDetails } from '../actions/basket';
import { isAuthenticated } from '../actions/auth';
import NavBar from '../layout/navbar';
import Loader from 'react-loader-spinner';
import Footer from '../layout/footer';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

const UpdateBasket = ({ match }) => {
  const [values, setValues] = useState({
    category: '',
    description: '',
    redirect: false,
    loading: false,
    error: '',
  });

  const { token } = isAuthenticated();

  const { category, description, redirect, loading } = values;

  const initialize = (basketId) => {
    basketDetails(token, basketId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        // populate the state with data
        setValues({
          ...values,
          category: data.category,
          description: data.description,
        });
      }
    });
  };

  useEffect(() => {
    initialize(match.params.basketId);
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });

    const basket = {
      category,
      description,
    };
    updateBasket(token, basket, match.params.basketId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        toast.error(data.error);
      } else {
        setValues({
          ...values,
          category: '',
          description: '',
          error: false,
          redirect: true,
        });
        toast.success('Info updated successfully!');
      }
    });
  };

  if (redirect) {
    return <Redirect to={'/baskets'} />;
  }

  return (
    <Fragment>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <div className='mt-5'>
              <p className='lead text-dark font-weight-normal mb-3'>
                Update basket data
              </p>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label
                    className='text-secondary text-sm_1'
                    htmlFor='category'
                  >
                    Category
                  </label>
                  <input
                    name='category'
                    value={category}
                    onChange={handleChange}
                    type='text'
                    className='form-control form-control-sm'
                    required
                  />
                </div>
                <div className='form-group'>
                  <label
                    className='text-secondary text-sm_1'
                    htmlFor='description'
                  >
                    Description
                  </label>
                  <input
                    name='description'
                    value={description}
                    onChange={handleChange}
                    type='text'
                    className='form-control form-control-sm'
                    required
                  />
                </div>
                <button type='submit' className='btn btn-dark btn-sm'>
                  {loading && (
                    <Loader
                      type='ThreeDots'
                      color='#2BAD60'
                      height='25'
                      width='25'
                    />
                  )}
                  {!loading && <span>Update</span>}
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

export default UpdateBasket;
