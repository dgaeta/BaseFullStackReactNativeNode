// import store from '../../store';
import * as api from './api';
// import * as actionCreators from './actions';

function onRequestSuccess(response: any): void {
  console.log(response);
}

export function authenticate(email: string, password: string): void {
  // @todo validate input
  api.authenticate(email, password).then(onRequestSuccess);
}