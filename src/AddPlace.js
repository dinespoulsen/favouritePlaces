"use strict";

import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import PlaceView from "./PlaceView"

export default class AddPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {test: ""};
  }

  getFormData(){
    return {
          name: this.state.name,
          street: this.state.street,
          number: this.state.number,
          zipcode: this.state.zipcode,
          city: this.state.city
        }
  }

  handlePressedAddPlace(){
    fetch('https://apifortests.herokuapp.com/api/places', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.getFormData())
    }).then((res) => res.json())
    .then((json) => this.moveToPlace(json.place))
  }

  moveToPlace(place){
    this.props.navigator.push({
      component: PlaceView,
      title: "Place",
      passProps: { place: place }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flowRight}>
          <Text style={styles.label}>Name:</Text>
          <TextInput style={styles.searchInput} placeHolder="test" onChangeText={(text) => this.setState({name: text})}/>
        </View>
        <View style={styles.flowRight}>
          <Text style={styles.label}>Street:</Text>
          <TextInput style={styles.searchInput} placeHolder="test" onChangeText={(text) => this.setState({street: text})}/>
        </View>
        <View style={styles.flowRight}>
          <Text style={styles.label}>Number:</Text>
          <TextInput style={styles.searchInput} placeHolder="test" onChangeText={(text) => this.setState({number: text})}/>
        </View>
        <View style={styles.flowRight}>
          <Text style={styles.label}>Zipcode:</Text>
          <TextInput style={styles.searchInput} placeHolder="test" onChangeText={(text) => this.setState({zipcode: text})}/>
        </View>
        <View style={styles.flowRight}>
          <Text style={styles.label}>City:</Text>
          <TextInput style={styles.searchInput} placeHolder="test" onChangeText={(text) => this.setState({city: text})}/>
        </View>
        <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this.handlePressedAddPlace.bind(this)}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
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
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 8,
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  label: {
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
