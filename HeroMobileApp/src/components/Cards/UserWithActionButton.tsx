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

export interface UserWithActionButtonProps {
  username: string;
  profileImagePath: string;
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
            
              <View style={styles.cardContent}
              >
                <View style={styles.profileImageSection}>
                <Image
                  style={styles.image}
                  source={require('../../assets/img/doge.png')}
                />
                </View>
                <View style={styles.userNameSection}>
                  <Text>{this.props.username}</Text>
                </View>

            </View>
            <View style={styles.buttonSection}>
              <View style={styles.mainButton}>
                <Button
                  onPress={() => {console.log('Main action pressed')}}
                  title={this.props.majorActionTitle}
                  color='white'
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
              <View style={styles.secondaryButton}>
                <Button
                  onPress={() => {console.log('Minor action pressed')}}
                  title={this.props.minorActionTitle}
                  color='white'
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
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
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  rowCard: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'stretch',
    alignContent: 'stretch',
    width: 100
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  image: {
    flex: 1,
    borderRadius: 45,
    resizeMode: 'cover',
    backgroundColor: 'red',
    width: 100,
    height: 100
  },
  cardContent: {
    flex: 4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    alignContent: 'stretch',
    backgroundColor: 'yellow',
    alignSelf: 'center'
  },
  profileImageSection: {
    display: 'flex',
    borderRadius: 30,
    flex: 2,
    // backgroundColor: 'green',
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  userNameSection: {
    flex: 1,
    // borderRadius: 10,
    // backgroundColor: 'red'
  },
  buttonSection: {
    flex: 1,
    backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center'
  },
  mainButton: {
    flex: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondaryButton: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'orange',
    alignItems: 'center',
    alignContent: 'stretch'
  }
});
