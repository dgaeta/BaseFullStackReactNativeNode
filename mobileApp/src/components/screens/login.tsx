import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  Button,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import * as  appActions from '../../actions/index';

export interface ILoginProps {
  dispatch: any;
}

export class Login extends Component<ILoginProps> {

  constructor(props: ILoginProps) {
    super(props)
  }

  render() {
    return (
        <View>
            <Button onPress={ () => this.onLoginPress()} title="Continue">
                <Text> Continue</Text>
            </Button>
        </View>
        
    );
  }

  /*
  onLoginPress:
    Changes the root value of the app to be 'after-login', changing it to tab view
  */
  onLoginPress() {

    this.props.dispatch(appActions.login());
   
  }
}


export default connect()(Login);