import http from './httpService';
import jwtDecode from 'jwt-decode';

const apiEndPoint = '/auth';
const tokenKey = 'token';

export async function login(email, password) {
  const data = await http.post(apiEndPoint, {
    email,
    password,
  });

  localStorage.setItem(tokenKey, JSON.stringify(data.data));
}

export function authenticate(jwt) {
  if (typeof window !== 'undefined') {
    // set token to localStorage
    localStorage.setItem(tokenKey, jwt);
  }
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export default {
  login,
  authenticate,
};
