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

import 
  UserWithActionButton,
  { UserWithActionButtonProps }
from '../Cards/UserWithActionButton';
import 
  UserWithDescription,
  { UserWithDescriptionProps }
from '../Cards/UserWithDescription';

export interface IVidCallsProps {
}

export interface IVidCallsState {
  upcomingCalls: any[];
  nowCall: any | undefined;
  pastCalls: any[];
}

const hardCodedNowCall: UserWithActionButtonProps = {
  username: 'DannyDedication',
  profileImagePath: '../../assets/img/doge.png',
  majorActionTitle: 'Join',
  minorActionTitle: 'Cancel'
};

const upcomingCallsData: UserWithDescriptionProps[] = [
  {
    username: 'Danny Dedication',
    description: 'in 2 hours',
    profileImageUrl: 'test'
  },
  {
    username: 'Danny Dedication',
    description: 'in 4 hours',
    profileImageUrl: 'test'
  },
  {
    username: 'Danny Dedication',
    description: 'in 6 hours',
    profileImageUrl: 'test'
  },
  {
    username: 'Danny Dedication',
    description: 'in 1 day',
    profileImageUrl: 'test'
  }
];

const pastCallsData: UserWithDescriptionProps[] = [
  {
    username: 'Danny Dedication',
    description: '1 day ago',
    profileImageUrl: 'test'
  },
  {
    username: 'Danny Dedication',
    description: '1 day ago',
    profileImageUrl: 'test'
  },
  {
    username: 'Danny Dedication',
    description: '2 days ago',
    profileImageUrl: 'test'
  },
  {
    username: 'Danny Dedication',
    description: '3 days ago',
    profileImageUrl: 'test'
  }
];

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
          username={hardCodedNowCall.username}
          profileImagePath={hardCodedNowCall.profileImagePath}
          majorActionTitle={hardCodedNowCall.majorActionTitle}
          minorActionTitle={hardCodedNowCall.minorActionTitle}
        />
        
        <Text>Upcoming</Text>
        <View style={styles.cardContainer}> 
          {
            upcomingCallsData.map((callData: UserWithDescriptionProps, index: number) => {
              return <UserWithDescription
                profileImageUrl={'url'}
                username={callData.username}
                description={callData.description}
              />
            })
          }
        </View>

        <Text>Past</Text>
        <View style={styles.cardContainer}> 
          {
            pastCallsData.map((callData: UserWithDescriptionProps, index: number) => {
              return <UserWithDescription
                profileImageUrl={'url'}
                username={callData.username}
                description={callData.description}
              />
            })
          }
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
