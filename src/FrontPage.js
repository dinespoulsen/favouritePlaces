"use strict";
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TestScene from "./TestScene";

export default class FrontPage extends Component {

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
