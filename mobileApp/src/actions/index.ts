import axios from 'axios';
import { AsyncStorage } from "react-native"
import jwt_decode from 'jwt-decode';

import * as types from './actiontypes';

/*
Action Creators
*/

export function changeAppRoot(root: any) {
  return {
    type: types.ROOT_CHANGED, 
    root: root
  };
}

/*
dispatch the actionCreators 
*/

export function appInitialized() {
  return (dispatch: any, getState: any) =>  {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code

    AsyncStorage.getItem(
      'jwtToken',
      (error: Error | undefined, result: string | undefined) => {
        console.log('checking storage on init')
        if (result) {
          setAuthToken(result);
          dispatch(changeAppRoot('after-login'));
        } else {
          dispatch(changeAppRoot('login'));
        }
      });
  };
}

export function login() {
  return (dispatch: any, getState: any) => {
    // login logic would go here, and when it's done, we switch app roots
    dispatch(changeAppRoot('after-login'));
  };
}

/**
  * This is an action creator. 
  * 
  * It is a function that returns an action based on the result of an async
  * function. We use the 'thunk' middleware to allow an async action
  * creator.
  * @param user 
  * @param history 
  */
 export function registerUser(user: any): (dispatch: any) => void {
  console.log('registerUser Action');

  return (dispatch: any) => {
    axios.post('http://localhost:3000/api/users/register', user)
      .then(res => {
        console.log(`SUCCESS: ${user}. RES: ${res}`);
        
        const { token } = res.data;
        AsyncStorage.setItem('jwtToken', token);
        setAuthToken(token);

        const decoded = jwt_decode(token);
        AsyncStorage.setItem('decoded', JSON.stringify(decoded));
        dispatch(changeAppRoot('after-login'));
      })
      .catch(err => {
        console.log(err);
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: err.response.data
        // });
      });
  }
}

function setAuthToken(token: string): void {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    console.log('setAuthToken() called with no token');
  }
}


