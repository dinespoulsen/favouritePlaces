"use strict";

import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import PlaceView from "./PlaceView";

export default class PlacesView extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1._id !== r2._id});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.places)
    };
  }

  getPlace(placeId){
    let place = this.props.places.find(place => place._id == placeId);
    this.handlePlacePressed(place);
  }

  handlePlacePressed(place){
    this.props.navigator.push({
      component: PlaceView,
      title: "Place",
      passProps: { place: place }
    })
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor='#dddddd' onPress={() => this.getPlace(rowData._id)}>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.price}>{rowData.name}</Text>
              <Text style={styles.title} numberOfLines={1}>{rowData.number} {rowData.street}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
}

var styles = StyleSheet.create({
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

module.exports = PlacesView
