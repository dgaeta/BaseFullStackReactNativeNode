/**
 * index.ts
 * Injects the required headers and manages the server API errors.
 *  
 */

// const fetchival: any = require('fetchival');
// import _ from 'lodash';
// import * as sessionSelections from '../';
// import apiConfig from './config';
// // import {fetch} from 'react-native';

// export function fetchApi(
//   endPoint: string,
//   payload: {} = {},
//   httpMethod: string = 'get',
//   headers: {} = {}
// ): Promise<any> {
//   const accessToken = sessionSelectors.get().tokens.access.value;

//   return fetchival(`${apiConfig.url}${endPoint}`, {
//     headers: _.pickBy(
//       {
//         ...(accessToken ? {
//           Authorization: `Bearer ${accessToken}`,
//         } : {
//           'Client-ID': apiConfig.clientId
//         }),
//         ...headers,

//       },
//       // 
//       item => !_.isEmpty(item)
//     )
//   })[httpMethod.toLocaleLowerCase()](payload)
// }
