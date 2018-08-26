import { Navigation } from 'react-native-navigation';
import Login from './login';
import HomeTab from './homeTab';
import RegisterTab from './registerTab';


export default (store: any, Provider: any) =>  {
	Navigation.registerComponent('ReactNativeReduxExample.Login', () => Login, store, Provider);
	Navigation.registerComponent('ReactNativeReduxExample.HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('ReactNativeReduxExample.RegisterTab', () => RegisterTab, store, Provider);
	
}