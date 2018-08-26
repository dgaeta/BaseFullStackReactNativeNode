import { Navigation } from 'react-native-navigation';

import Register from './auth/Register';
import VidCalls from  './vidCalls/VidCalls';

export default (store, Provider) => {
  if (store === undefined) {
    throw new Error('store is undefined');
  }
  if (Provider === undefined) {
    throw new Error('store is undefined');
  }
  console.log(store);
  console.log(Provider);
  Navigation.registerComponent('hero.login', () => Register, store, Provider);
  Navigation.registerComponent('hero.home', () => VidCalls, store, Provider);
}

