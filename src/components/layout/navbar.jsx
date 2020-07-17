import React from 'react';
import { isAuthenticated } from '../actions/auth';

const NavBar = () => {
  const { user } = isAuthenticated();

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Shopping<span>Basket</span>
        </a>
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
              <a className='nav-link' href='#'>
                All Baskets
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Completed
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-success' href='#'>
                New
              </a>
            </li>
          </ul>

          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Welcome{' '}
                <span className='text-sm text-primary'>{user.name}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
