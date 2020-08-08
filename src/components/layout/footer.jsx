import React from 'react';

const Footer = () => {
  return (
    <div className='footer fixed-bottom bg-dark text-secondary text-center py-1'>
      <div className='container'>
        <span className='font-weight-light'>
          &copy;Copyright {new Date().getFullYear()} Kenlog. All rights reserved{' '}
        </span>
      </div>
    </div>
  );
};

export default Footer;
