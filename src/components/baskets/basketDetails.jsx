import React, { Fragment, useState, useEffect } from 'react';
import NavBar from '../layout/navbar';
import { basketDetails } from '../actions/basket';
import { isAuthenticated } from '../actions/auth';
import LoadingIndicator from '../../common/loadingIndicator';
import moment from 'moment';

const BasketDetails = (props) => {
  const [values, setValues] = useState({
    basket: '',
    error: '',
    loading: false,
  });

  const { token } = isAuthenticated();
  const { basket, loading } = values;
  useEffect(() => {
    const basketId = props.match.params.basketId;
    loadBasketDetails(basketId);
  }, [props]);

  const loadBasketDetails = (basketId) => {
    setValues({ ...values, loading: true });

    basketDetails(token, basketId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ basket: data, loading: false });
      }
    });
  };

  return (
    <Fragment>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            {loading ? (
              <LoadingIndicator />
            ) : (
              <div className='mt-5'>
                <div className='d-flex justify-content-between'>
                  <h3 className='heading-md'>{basket && basket.category}</h3>
                  <span className='d-flex justify-content-between align-items-center'>
                    <span>
                      <svg
                        width='1.5em'
                        height='1.5em'
                        viewBox='0 0 16 16'
                        className='bi bi-journal-plus text-success'
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M4 1h5v1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2zm10 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1zM2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2z' />
                        <path
                          fillRule='evenodd'
                          d='M13.5 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V1.5a.5.5 0 0 1 .5-.5z'
                        />
                        <path
                          fillRule='evenodd'
                          d='M13 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z'
                        />
                      </svg>
                    </span>
                  </span>
                </div>
                <div>
                  <span className='text-sm_1'>Overview:</span>
                  <p className='lead text-sm_2 text-secondary'>
                    {basket.description}
                  </p>
                  <span className='d-flex align-items-center text-sm_2 text-secondary'>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      className='bi bi-clock mr-1'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z'
                      />
                    </svg>{' '}
                    Created {moment(basket.createdAt).fromNow()}
                  </span>
                  <hr />
                </div>
                <button className='btn btn-sm btn-primary shadow-sm'>
                  View items {''}
                  <span className='badge badge-light'>9</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BasketDetails;
