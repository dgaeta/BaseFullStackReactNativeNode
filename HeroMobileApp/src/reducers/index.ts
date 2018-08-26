
// import { combineReducers } from 'redux';
// // import errorReducer from './errorReducer';
// import { root } from './rootReducer';

// export default combineReducers({
//   root: root
// });

import {root} from './rootReducer';

/*
This file exports the reducers as an object which 
will be passed onto combineReducers method at src/app.js
*/
export {
    root
}