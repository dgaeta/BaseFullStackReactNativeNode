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
import CircleButton from '../Buttons/CircleButton';

export interface IVidCallsProps {
}

export interface IVidCallsState {
  upcomingCalls: any[];
  nowCall: any | undefined;
  pastCalls: any[];
  modalContent: JSX.Element | undefined
}

export const enum ModalContentType {
  NowCall = 0,
  UpcomingCall = 1,
  PastCall = 2,
  AddNewCall = 3
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

  private _setModalContent(modalType: ModalContentType, callData: any): void {
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

    const addNewCallComponent: JSX.Element = (
      <View style={styles.modalContainer}>
        <Text>I am looking to</Text>
        <View style={styles.callOptions}>
          <Text>Give advice</Text>
          <Text>Get advice</Text>
        </View>

        <Text>From someone</Text>
        <View style={styles.callOptions}>
          <Text>My age</Text>
          <Text>Older</Text>
          <Text>Younger</Text>
        </View>

        <Text>At</Text>
        <View style={styles.callOptions}>
          <Text>Now</Text>
          <Text>Today</Text>
          <Text>Tomorrow</Text>
        </View>
        <View style={styles.callOptions}>
          <Text>Morning</Text>
          <Text>Afternoon</Text>
          <Text>Night</Text>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
        }}>
          <View style={{justifyContent: 'space-between'}}>
            <CircleButton title={'✓'} onPressHandler={() => {
              this.setState({ modalContent: undefined });
            }} />
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <CircleButton title={'x'} onPressHandler={() => {
              this.setState({ modalContent: undefined });
            }} />
          </View>
        </View>
      </View>
    );

    switch (modalType) {
      case ModalContentType.NowCall:
        this.setState({ modalContent: callDetailComponent })
        break;
      
      case ModalContentType.UpcomingCall:
        this.setState({ modalContent: callDetailComponent })
        break;
      
      case ModalContentType.PastCall:
        this.setState({ modalContent: callDetailComponent })
        break;
      
      case ModalContentType.AddNewCall:
        this.setState({ modalContent: addNewCallComponent })
        break;

      default:
        break;
    }
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
                  this._setModalContent(ModalContentType.UpcomingCall, {});
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
                  this._setModalContent(ModalContentType.PastCall, {});
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
        
        <CircleButton title={'+'} onPressHandler={() => {
          this._setModalContent(ModalContentType.AddNewCall, {});
        }} />
        
        <Modal
          visible={this.state.modalContent !== undefined}
          animationType={'slide'}
          transparent={false}
          >
            {this.state.modalContent}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
