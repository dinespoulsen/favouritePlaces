"use strict";
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Navigator, TouchableOpacity} from 'react-native';

export default class TestScene extends Component {

  gotoNext(){
    this.props.navigator.push({
      id: 'tapbar'
    });
  }
  
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
            onPress={this.gotoNext.bind(this)}>
          <Text>Start App!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
