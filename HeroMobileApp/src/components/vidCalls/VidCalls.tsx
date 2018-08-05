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

import UserWithActionButton from '../Cards/UserWithActionButton';

export interface IVidCallsProps {
}

export interface IVidCallsState {
  upcomingCalls: any[];
  nowCall: any | undefined;
  pastCalls: any[];
}

export default class VidCalls extends Component<IVidCallsProps, IVidCallsState> {

  constructor(props: IVidCallsProps) {
    super(props);

    this.state = {
      upcomingCalls: [],
      nowCall: undefined,
      pastCalls: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Now</Text>
        <UserWithActionButton 
          username={'Danny Dedication'}
          profileImageUrl={'http://myProfPic.com/DannyDedication'}
          majorActionTitle={'Join'}
          minorActionTitle={'Cancel'}
        />
        
        <Text>Upcoming</Text>
        <View style={styles.cardContainer}>  
          <View style={styles.rowCard}>
            <Text> This is the first item</Text>
          </View>
          <View style={styles.rowCard}>
            <Text> This is the second item</Text>
          </View>
          <View style={styles.rowCard}>
            <Text> This is the third item</Text>
          </View>
          <View style={styles.rowCard}>
            <Text> This is the fourth item</Text>
          </View>
        </View>

        <Text>Past</Text>
        <View style={styles.cardContainer}>  
          <View style={styles.rowCard}>
            <Text> This is the first item</Text>
          </View>
          <View style={styles.rowCard}>
            <Text> This is the second item</Text>
          </View>
          <View style={styles.rowCard}>
            <Text> This is the third item</Text>
          </View>
          <View style={styles.rowCard}>
            <Text> This is the fourth item</Text>
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
    backgroundColor: '#F5FCFF',
    paddingTop: 100,
    paddingBottom: 100
  }
});
