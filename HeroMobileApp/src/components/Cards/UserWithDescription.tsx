/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export interface UserWithDescriptionProps {
  username: string;
  profileImageUrl: string;
  description: string;
}

export interface UserWithDescriptionState {
}

export default class UserWithDescription extends Component<
UserWithDescriptionProps,
UserWithDescriptionState
> {

  constructor(props: UserWithDescriptionProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.rowCard}>
        <Text>{this.props.profileImageUrl}</Text>
        <Text>{this.props.username}</Text>
        <Text>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  rowCard: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    alignItems: 'stretch',
    alignContent: 'stretch',
    flexWrap: 'wrap'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
