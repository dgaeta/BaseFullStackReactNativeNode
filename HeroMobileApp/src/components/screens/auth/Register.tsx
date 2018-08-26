/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Modal,
  TouchableHighlight,
  TextInput
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { connect } from 'react-redux';

import { registerUser } from '../../../actions/authenticationActions';

export interface IRegisterProps {
  registerUser: (user: any) => void;
}

export interface IRegisterState {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
  errors: any;
}

class Register extends Component<IRegisterProps, IRegisterState> {

  constructor(props: IRegisterProps) {
    super(props);
    console.log('Register constructor');

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      errors: {}
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  private _handleSubmit(e: any): void {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    };
    this.props.registerUser(user);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Registration</Text>

        <Text>Name: </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text: string) => this.setState({name: text})}
          value={this.state.name}
        />
        <Text>Email: </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text: string) => this.setState({email: text})}
          value={this.state.email}
        />

        <Text>Password: </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text: string) => this.setState({password: text})}
          value={this.state.password}
        />

        <Text>Password again (just in case) </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text: string) => this.setState({password_confirm: text})}
          value={this.state.password_confirm}
        />

        <Button
          onPress={this._handleSubmit}
          title="Submit"
          color="#841584"
          accessibilityLabel="Create your user"
        />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  errors: state.errors
})

// literally connects the Register component to redux’s store so that
// dispatch is passed as a prop to Register and we can call it from
// with Register's methods
export default connect()(Register as any)

const styles = StyleSheet.create({
  callOptions: {
    flex: 1,
    flexDirection: 'row'
  },
  circleText: {
    fontSize: 32
  },
  circleContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center'
  },
  circleButton: {
    flexDirection: 'row',
    height: 70,
    width: 70,
    backgroundColor: 'yellow',
    borderColor: 'grey',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  rowCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
    paddingBottom: 50
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 100,
    paddingBottom: 100
  }
});
