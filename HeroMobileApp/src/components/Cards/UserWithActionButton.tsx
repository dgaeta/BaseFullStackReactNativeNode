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

export interface UserWithActionButtonProps {
  username: string;
  profileImageUrl: string;
  majorActionTitle: string;
  minorActionTitle: string;
}

export interface UserWithActionButtonState {
}

export default class UserWithActionButton extends Component<
UserWithActionButtonProps,
UserWithActionButtonState
> {

  constructor(props: UserWithActionButtonProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>  
          <View style={styles.rowCard}>
            
              <View style={{
                flex: 4,
                alignItems: 'stretch',
                alignContent: 'stretch',
                backgroundColor: 'yellow',
                alignSelf: 'center'
              }}
              >
                <View style={{
                  display: 'flex',
                  flex: 2,
                  backgroundColor: 'green',
                  alignItems: 'stretch',
                  alignContent: 'stretch'
                }}>
                  <Text>{this.props.profileImageUrl}</Text> 
                </View>
                <View style={{
                  flex: 1,
                  backgroundColor: 'red'
                }}>
                  <Text>{this.props.username}</Text>
                </View>

            </View>
            <View style={{
              flex: 1,
              alignSelf: 'center',
              backgroundColor: 'orange',
              alignItems: 'stretch',
              alignContent: 'stretch'
            }}>
              <Text>{this.props.majorActionTitle}</Text>
              <Text>{this.props.minorActionTitle}</Text>
            </View>

          </View>
        </View>
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
    backgroundColor: '#F5FCFF'
  }
});
