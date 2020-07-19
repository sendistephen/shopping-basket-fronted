import React, { useState, useEffect, Fragment } from 'react';
import { isAuthenticated } from '../actions/auth';
import NavBar from '../layout/navbar';
import Footer from '../layout/footer';
import { createBasket } from '../actions/basket';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

const NewBasket = ({ history }) => {
  const [values, setValues] = useState({
    category: '',
    description: '',
    error: '',
    loading: false,
  });

  useEffect(() => {
    !isAuthenticated() && history.push('/login');
  });

  const { category, description, loading } = values;
  const { token } = isAuthenticated();

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value, error: false });
  };

  const handleSubbmit = (e) => {
    e.preventDefault();
    const newBasket = { category, description };
    setValues({ ...values, error: '', loading: true });

    createBasket(token, newBasket).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        toast.error(data.error);
      } else {
        setValues({
          category: '',
          description: '',
          error: false,
          loading: false,
        });
        toast.success('Added successfully!');
      }
    });
  };

  return (
    <Fragment>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <div className='mt-5'>
              <p className='lead text-dark font-weight-normal mb-3'>
                Add new basket to collection
              </p>
              <form onSubmit={handleSubbmit}>
                <div className='form-group'>
                  <label
                    className='text-secondary text-sm_1'
                    htmlFor='category'
                  >
                    Category
                  </label>
                  <input
                    onChange={handleChange('category')}
                    value={category}
                    name={category}
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
                    onChange={handleChange('description')}
                    value={description}
                    name={description}
                    type='text'
                    className='form-control form-control-sm'
                    required
                  />
                </div>
                <button type='submit' className='btn btn-secondary btn-sm'>
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

export default NewBasket;
