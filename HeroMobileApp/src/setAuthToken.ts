import axios from 'axios';

export default function setAuthToken(token: string): void {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    console.log('setAuthToken() called with no token');
  }
}