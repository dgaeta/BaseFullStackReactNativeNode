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

export interface CallDetailProps {
  key: string,
  username: string;
  profileImageUrl: string;
  description: string;
}

export interface CallDetailState {
}

export default class UpcomingCallDetail extends Component<
CallDetailProps,
CallDetailState
> {

  constructor(props: CallDetailProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.rowCard}>
        {/* <Image
          style={styles.image}
          source={require('../../../assets/img/doge.png')}
        /> */}
        <Text style={styles.font}>{this.props.username}</Text>
        <Text style={styles.font}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    color: 'red'
  },
  image: {
    flex: 1,
    borderRadius: 20,
    resizeMode: 'cover',
    backgroundColor: 'red',
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
    flexWrap: 'wrap',
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
