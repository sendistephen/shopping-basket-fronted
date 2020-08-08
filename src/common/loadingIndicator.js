import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingIndicator = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader type='ThreeDots' color='#2BAD60' height='50' width='50' />
    </div>
  );
};
export default LoadingIndicator;
