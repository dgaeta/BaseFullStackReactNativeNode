import { fetchApi } from "../../services/api";
// const Buffer: any = require('Buffer');
/**
 * In charge of each network request for user.
 */

 export function create(payload: {}): Promise<any> {
  // todo: validate the parameter is non null 
  return fetchApi(endPoints.create, payload, 'post');
 }

//  export function authenticate(email: string, password: string): Promise<any> {
//    // todo authenticate input
//    return fetchApi(
//       endPoints.authenticate,
//       {},
//       'post',
//       {
//         Authortization: `Basic ${new Buffer(`${email}:${password}`).toString('base64')}`
//       }
//     );
//  }
