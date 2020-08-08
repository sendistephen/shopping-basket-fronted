import React, { Fragment, useState, useEffect } from 'react';
import NavBar from '../layout/navbar';
import { basketDetails, deleteBasket } from '../actions/basket';
import { isAuthenticated } from '../actions/auth';
import LoadingIndicator from '../../common/loadingIndicator';
import moment from 'moment';
import { toast } from 'react-toastify';
import { Redirect, Link } from 'react-router-dom';
import Footer from '../layout/footer';
import { deleteItem } from '../actions/items';

const BasketDetails = (props) => {
  const [values, setValues] = useState({
    basket: '',
    error: '',
    items: [],
    loading: false,
    redirect: false,
    refresh: false,
  });

  const { token } = isAuthenticated();
  const { basket, loading, items, redirect, refresh } = values;

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

  // delete basket item
  const handleRemoveItem = (itemId) => {
    const token = isAuthenticated().token;

    deleteItem(token, props.match.params.basketId, itemId).then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        setValues({
          ...values,
          refresh: true,
        });
        toast.success('Item removed!');
      }
    });
  };

  if (redirect) {
    return <Redirect to={'/baskets'} />;
  }
  if (refresh) {
    const basketId = props.match.params.basketId;

    return <Redirect to={`/basket/${basketId}`} />;
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
                          <span>
                            <input type='checkbox' className='mr-2' />
                            {item.name}
                          </span>
                          <svg
                            onClick={() => handleRemoveItem(item._id)}
                            width='1em'
                            height='1em'
                            viewBox='0 0 16 16'
                            className='bi bi-trash'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                            <path
                              fillRule='evenodd'
                              d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                            />
                          </svg>
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
