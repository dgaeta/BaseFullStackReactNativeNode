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
  TouchableHighlight
} from 'react-native';

import 
  UserWithActionButton,
  { UserWithActionButtonProps }
from '../Cards/UserWithActionButton';
import 
  UserWithDescription,
  { UserWithDescriptionProps }
from '../Cards/UserWithDescription';
import CallDetail from './CallDetail';

export interface IVidCallsProps {
}

export interface IVidCallsState {
  upcomingCalls: any[];
  nowCall: any | undefined;
  pastCalls: any[];
  modalContent: JSX.Element | undefined
}

export enum CallType {
  nowCall = 0,
  upcomingCall = 1,
  pastCall = 2

}

const hardCodedNowCall: UserWithActionButtonProps = {
  username: 'DannyDedication',
  profileImagePath: '../../assets/img/doge.png',
  majorActionTitle: 'Join',
  minorActionTitle: 'Cancel'
};

const upcomingCallsData: UserWithDescriptionProps[] = [
  {
    key: '1',
    username: 'Danny Dedication',
    description: 'in 2 hours',
    profileImageUrl: 'test'
  },
  {
    key: '2',
    username: 'Danny Dedication',
    description: 'in 4 hours',
    profileImageUrl: 'test'
  },
  {
    key: '3',
    username: 'Danny Dedication',
    description: 'in 6 hours',
    profileImageUrl: 'test'
  },
  {
    key: '4',
    username: 'Danny Dedication',
    description: 'in 1 day',
    profileImageUrl: 'test'
  }
];

const pastCallsData: UserWithDescriptionProps[] = [
  {
    key: '1',
    username: 'Danny Dedication',
    description: '1 day ago',
    profileImageUrl: 'test'
  },
  {
    key: '2',
    username: 'Danny Dedication',
    description: '1 day ago',
    profileImageUrl: 'test'
  },
  {
    key: '3',
    username: 'Danny Dedication',
    description: '2 days ago',
    profileImageUrl: 'test'
  },
  {
    key: '4',
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
      pastCalls: [],
      modalContent: undefined
    };
  }

  private _removeUpcomingModal(): void {
    this.setState({ modalContent: undefined });
  }

  private _setModalContent(callType: CallType, callData: any): void {
    switch (callType) {
      case CallType.nowCall:
        break;
      
      case CallType.upcomingCall:
        break;
      
      case CallType.pastCall:
        break;
      
      default:
        break;
    }

    const callDetailComponent: JSX.Element = (
      <View style={styles.modalContainer}>
          <CallDetail
            key={'1'}
            username={'Danny Dedication'}
            description={'This a call detail bro.'}
            profileImageUrl={'test'}
          />
        <TouchableHighlight
          onPress={() => {
            this._removeUpcomingModal();
          }}>
          <Text>Hide Modal</Text>
        </TouchableHighlight>
      </View>
      
    );

    this.setState({ modalContent: callDetailComponent })
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
          <FlatList 
            horizontal={true}
            data={upcomingCallsData}
            renderItem={({item, index}) => (
              <TouchableHighlight
                onPress={() => {
                  this._setModalContent(CallType.upcomingCall, {});
                }}
              >
                <UserWithDescription
                  key={item.key}
                  profileImageUrl={'url'}
                  username={item.username}
                  description={item.description}
                />
              </TouchableHighlight>
            )
            }
          />
        </View>

        <Text>Past</Text>
        <View style={styles.cardContainer}> 
          <FlatList 
            horizontal={true}
            data={pastCallsData}
            renderItem={({item, index}) => (
              <TouchableHighlight
                onPress={() => {
                  this._setModalContent(CallType.pastCall, {});
                }}
              >
                <UserWithDescription
                    key={item.key}
                    profileImageUrl={'url'}
                    username={item.username}
                    description={item.description}
                  />
              </TouchableHighlight>
            )}
          />
        </View>

        
        <Modal
          visible={this.state.modalContent !== undefined}
          animationType={'fade'}
          transparent={false}
          >
            {this.state.modalContent}
        </Modal>
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
