import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import {Navigation} from 'react-native-navigation';

import { registerUser } from '../../actions/index';

export interface IRegisterProps {
  dispatch: any;
  registerUser: any;
}

export interface IRegisterState {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
  errors: any;
}

export class Registertab extends Component<IRegisterProps, IRegisterState> {
  
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
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Registration</Text>

        <Text>Name: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text: string) => this.setState({name: text})}
          value={this.state.name}
        />
        <Text>Email: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text: string) => this.setState({email: text})}
          value={this.state.email}
        />

        <Text>Password: </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text: string) => this.setState({password: text})}
          value={this.state.password}
        />

        <Text>Password again (just in case) </Text>
        <TextInput
          style={styles.textInput}
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

  private _handleSubmit(e: any): void {
    if (
      this.state.email !== '' && this.state.name !== '' &&
      this.state.password !== ''&&
      this.state.password === this.state.password_confirm
    ) {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirm: this.state.password_confirm
      };
      console.log('Submitting register User event');
      this.props.registerUser(user);
    } else {
      console.log('invalid register info');
    }
  }
}

const mapStateToProps = (state: any) => ({
  errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(Registertab);

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
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
