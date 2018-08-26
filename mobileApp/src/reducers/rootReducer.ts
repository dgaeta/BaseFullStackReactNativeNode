import * as types from '../actions/actiontypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  root: undefined // 'login' / 'after-login'
  
});

//root reducer
export function root(state = initialState, action = {}) {

  switch ((action as any).type) {
    
    case types.ROOT_CHANGED:
      return state.merge({
        root: (action as any).root
      });

    default:
      return state;
  }
}
