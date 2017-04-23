"use strict";

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import PlacesView from "./PlacesView"
import AddPlace from "./AddPlace"

export default class FrontPage extends Component {

  handlePressedPlaces(){
    this.props.navigator.push({
      component: PlacesView,
      title: "Places"
    })
  }

  handlePressedAddPlace(){
    this.props.navigator.push({
      component: AddPlace,
      title: "Add Place"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.welcome}>
            My favourite places!
          </Text>
          <Text style={styles.intro}>
            Always have your favourite places at an arms length!
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableHighlight onPress={this.handlePressedPlaces.bind(this)} style={styles.button} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>
              Places
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handlePressedAddPlace.bind(this)} style={styles.button} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>
              Add Place
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  welcome: {
    textAlign: 'center',
    fontSize: 20,
    color: "blue",
    marginBottom: 40,
  },
  intro: {
    textAlign: "center",
    fontSize: 14,
    color: "green",
    padding: 30,
  },
  top: {
    flex: 2,
  },
  actions: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = FrontPage
