import React, { useState, useEffect, Fragment } from 'react';
import { isAuthenticated } from '../actions/auth';
import NavBar from '../layout/navbar';
import Footer from '../layout/footer';
import Search from '../layout/search';
import LoadingIndicator from '../../common/loadingIndicator';
import { Link } from 'react-router-dom';
import { getBaskets } from '../actions/basket';

const Baskets = ({ history }) => {
  const [values, setValues] = useState({
    baskets: [],
    loading: false,
    error: '',
  });

  const { baskets, loading } = values;
  const { token } = isAuthenticated();

  useEffect(() => {
    !isAuthenticated() && history.push('/login');

    loadBaskets();
  }, []);

  // get baskets
  const loadBaskets = () => {
    setValues({ ...values, loading: true });
    getBaskets(token).then((data) => {
      if (data.error) {
        setValues({ ...values, loading: false, error: data.error });
      } else {
        setValues({ ...values, baskets: data, loading: false });
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
              <h3 className='mb-5'>Things on my shopping list</h3>
              <Search />
              {loading ? (
                <LoadingIndicator />
              ) : (
                baskets.length > 0 &&
                baskets.map((basket) => (
                  <div
                    key={basket._id}
                    className='d-flex justify-content-between basket-category mb-2 px-2 shadow-sm rounded-sm d-flex align-items-center'
                  >
                    <Link
                      to={`/basket/${basket._id}`}
                      className='basket-category-link'
                    >
                      <span className='lead font-weight-normal text-sm'>
                        {basket.category}
                      </span>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Baskets;
