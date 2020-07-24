import React, { Fragment, useState, useEffect } from 'react';
import NavBar from '../layout/navbar';
import { basketDetails, deleteBasket } from '../actions/basket';
import { isAuthenticated } from '../actions/auth';
import LoadingIndicator from '../../common/loadingIndicator';
import moment from 'moment';
import { toast } from 'react-toastify';
import { Redirect, Link } from 'react-router-dom';
import Footer from '../layout/footer';

const BasketDetails = (props) => {
  const [values, setValues] = useState({
    basket: '',
    error: '',
    loading: false,
    redirect: false,
  });

  const { token } = isAuthenticated();
  const { basket, loading, redirect } = values;

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

  const handleDelete = () => {
    const basketId = props.match.params.basketId;
    const token = isAuthenticated().token;

    deleteBasket(token, basketId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
        toast.error(data.error);
      } else {
        setValues({ ...values, redirect: true });
        toast.success('Basket deleted successfully!');
      }
    });
  };

  const confirmDelete = () => {
    let answer = window.confirm(
      'Are you sure you want to perform this action?'
    );
    if (answer) {
      handleDelete();
    }
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
            {loading ? (
              <LoadingIndicator />
            ) : (
              <div className='mt-5'>
                <div className='d-flex justify-content-between'>
                  <h3 className='heading-md'>{basket && basket.category}</h3>
                  <span className='d-flex justify-content-between align-items-center'>
                    <Link
                      to={`/basket/${basket._id}/item/new`}
                      className='shadow btn btn-outline-dark btn-sm text-sm_2 mr-2 text-dark item-link'
                    >
                      New Item
                    </Link>
                    <span>
                      <Link
                        to={`/basket/update/${basket._id}`}
                        className='mr-2 btn btn-outline-warning btn-sm text-sm_2 shadow'
                      >
                        Edit
                      </Link>
                    </span>
                    <span>
                      <button
                        onClick={confirmDelete}
                        className='btn btn-danger btn-sm text-sm_2 shadow'
                      >
                        Trash
                      </button>
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
                <button
                  className='btn btn-sm btn-primary shadow'
                  data-toggle='collapse'
                  href='#collapseItems'
                  role='button'
                  aria-expanded='false'
                  aria-controls='collapseItems'
                >
                  View items {''}
                  <span className='badge badge-light'>
                    {basket && basket.items.length}
                  </span>
                </button>
                {/* show/hide items */}
                <div className='collapse' id='collapseItems'>
                  <p className='lead text-sm_1 font-weight-bold mt-3'>
                    Pending items to buy
                  </p>
                  {basket &&
                    basket.items.map((item) => (
                      <div key={item._id} className='list-group '>
                        <span className='shadow list-group-item list-group-item-action list-group-item-info d-flex justify-content-between align-items-center text-sm_2'>
                          {item.name}
                          <input type='checkbox' />
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default BasketDetails;
