// authentication.js

import axios from 'axios';
import { AsyncStorage } from "react-native"
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';

 /**
  * This is an action creator. 
  * 
  * It is a function that returns an action based on the result of an async
  * function. We use the 'thunk' middleware to allow an async action
  * creator.
  * @param user 
  * @param history 
  */
export function registerUser(user: any, history: any): (dispatch: any) => void {
  console.log('****');

  return (dispatch: any) => {
    axios.post('http://localhost:3000/api/users/register', user)
      .then(res => {
        console.log(`SUCCESS: ${user}. RES: ${res}`);
        
        const { token } = res.data;
        AsyncStorage.setItem('jwtToken', token);
        setAuthToken(token);

        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
        history.push('/');
      })
      .catch(err => {
        console.log(err);
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
      });
  }
}

export const setCurrentUser = decoded => {
  return {
      type: SET_CURRENT_USER,
      payload: decoded
  }
}