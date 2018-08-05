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
import UserWithDescription from '../Cards/UserWithDescription';

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
          <UserWithDescription
            profileImageUrl={'url'}
            username={'Danny Dedication'}
            description={'This is the first card'}
          />
          <UserWithDescription
            profileImageUrl={'url'}
            username={'Danny Dedication'}
            description={'This is the second card'}
          />
          <UserWithDescription
            profileImageUrl={'url'}
            username={'Danny Dedication'}
            description={'This is the third card'}
          />
          <UserWithDescription
            profileImageUrl={'url'}
            username={'Danny Dedication'}
            description={'This is the fourth card'}
          />
        </View>

        <Text>Past</Text>
        <View style={styles.cardContainer}>  
        <UserWithDescription
            profileImageUrl={'url'}
            username={'Danny Dedication'}
            description={'This is the first card'}
          />
          <UserWithDescription
            profileImageUrl={'url'}
            username={'Danny Dedication'}
            description={'This is the second card'}
          />
          <UserWithDescription
            profileImageUrl={'url'}
            username={'Danny Dedication'}
            description={'This is the third card'}
          />
          <UserWithDescription
            profileImageUrl={'url'}
            username={'Danny Dedication'}
            description={'This is the fourth card'}
          />
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
