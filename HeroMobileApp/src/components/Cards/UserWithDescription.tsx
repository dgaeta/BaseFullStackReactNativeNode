/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

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
        <Image
          style={styles.image}
          source={require('../../assets/img/doge.png')}
        />
        <Text style={styles.font}>{this.props.username}</Text>
        <Text style={styles.font}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    color: 'white'
  },
  image: {
    flex: 1,
    borderRadius: 20,
    resizeMode: 'cover',
    backgroundColor: 'red',
    width: 40,
    height: 40
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCard: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    margin: 5,
    fontSize: 10
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
