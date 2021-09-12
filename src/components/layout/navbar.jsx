import React from 'react';
import { isAuthenticated } from '../actions/auth';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { user } = isAuthenticated();

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link to='/baskets' className='navbar-brand'>
          Shopping<span>Basket</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/baskets'>
                All Baskets
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/baskets/completed' className='nav-link'>
                Completed
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-success' to='/basket/new'>
                New
              </Link>
            </li>
          </ul>

          <ul className='nav navbar-nav  navbar-right'>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Hi, <span className='text-sm_1 text-primary'>{user.name}</span>
              </Link>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item text-sm_2' to='/logout'>
                  Sign out
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
