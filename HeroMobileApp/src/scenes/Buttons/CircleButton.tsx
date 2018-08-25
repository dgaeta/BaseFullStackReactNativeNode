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
import { ModalContentType } from '../vidCalls/VidCalls';

export interface CircleButtonProps {
  title: string;
  onPressHandler: (param: any) => void;
  width?: number;
  height?: number;
}

export interface CircleButtonState {
}

export default class CircleButton extends Component<
CircleButtonProps,
CircleButtonState
> {

  constructor(props: CircleButtonProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.circleContainer}>
          <TouchableHighlight
            onPress={() => {
              this.props.onPressHandler(ModalContentType.AddNewCall);
            }}
          >
            <View style={styles.circleButton}>
              <Text style={styles.circleText}>{this.props.title}</Text>
            </View>
          </TouchableHighlight>
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
