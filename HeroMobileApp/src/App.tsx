/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import store from 'redux';

import VidCalls from './scenes/vidCalls/VidCalls';
import Register from './components/screens/auth/Register';
import configureStore from './store';
import * as appActions from './actions/authenticationActions';
import registerScreens from './components/screens/screens';

export interface IAppProps {
};

export interface IStoreState {
  app: any;
}

const APP_TITLE: string = 'Hero';

export default class App extends Component<IAppProps> {
  private _store = configureStore();
  private _currentRoot: any;

  constructor(props: IAppProps) {
    super(props);
    console.log('hello');
    registerScreens(this._store, Provider);

    this._store.subscribe(this._onStoreUpdate.bind(this));
    this._store.dispatch(appActions.appInitialized() as any);
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store = { this._store }>
          <Register />
        </Provider>
        <Text>Hello</Text>
      </View>
    );
  }

  private _onStoreUpdate(): void {
    // let { root } = (this._store.getState() as any).app;
    let root = 'hero.login';
    // handle a root change
    if (this._currentRoot != root) {
      this._currentRoot = root;
      this._startApp(root);
    }
  }

  private _startApp(root: string): void {
    console.log(Navigation);
    // Navigation.startSingleScreenApp({
    //   screen: {
    //     screen: 'hero.login',
    //     title: 'Welcome',
    //     navigatorStyle: {},
    //     navigatorButtons: {}
    //   }
    // });
    // switch(root) {
    //   case 'hero.login':
    //     Navigation.startSingleScreenApp({
    //       screen: {
    //         screen: 'hero.login',
    //         title: 'Welcome',
    //         navigatorStyle: {},
    //         navigatorButtons: {}
    //       }
    //     });
    //     break;

    //   case 'after-login':
    //     Navigation.startSingleScreenApp({
    //       screen: {
    //         screen: 'hero.home',
    //         title: 'Home',
    //         navigatorStyle: {},
    //         navigatorButtons: {}
    //       }
    //     });
    //     break;
      
    //   default:
    //     break;
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
