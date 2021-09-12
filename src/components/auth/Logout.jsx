import { useEffect } from 'react';
import { signout } from '../actions/auth';

const Logout = () => {
  useEffect(() => {
    signout();
    window.location = '/login';
  });
  return null;
};

export default Logout;
