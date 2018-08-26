// authentication.js

import axios from 'axios';
import { AsyncStorage } from "react-native"
import jwt_decode from 'jwt-decode';

import * as actionTypes from './actionTypes';
import setAuthToken from '../setAuthToken';

/*
Action Creators
*/

export function changeAppRoot(root) {
  return {
    type: actionTypes.ROOT_CHANGED, 
    root: root
  };
}

export function appInitialized() {
  return async function(dispatch: any, getState: any) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot('hero.login'));
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
