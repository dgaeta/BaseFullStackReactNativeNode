import * as types from '../actions/actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  root: undefined // 'hero.login' / 'after-login'
  
});

//root reducer
export function root(state = initialState, action: any) {

  switch (action.type) {
    
    case types.ROOT_CHANGED:
      return state.merge({
        // root: action.root
        root: 'hero.login' as any
      });

    default:
      return state;
  }
}
