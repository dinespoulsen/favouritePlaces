"use strict";

import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps'

export default class PlaceView extends Component {
  constructor(props) {
    super(props);
    this.state = {region: {
        latitude: this.props.place.lat,
        longitude: this.props.place.lng,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034,
      }
    };
  }

  render() {
    let marker = <MapView.Marker coordinate={{latitude: this.props.place.lat, longitude: this.props.place.lng}} title={this.props.place.name} description="to come..."/>;
    return (
      <View style={styles.container}>
        <View style={{ position: 'relative', height: 400}}>
          <MapView
            style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
            initialRegion={this.state.region}
          >
            {marker}
          </MapView>
        </View>
        <View style={styles.info}>
          <View>
            <Text style={styles.name}>{this.props.place.name}</Text>
          </View>
          <View style={styles.separator}/>
          <Text>Adress: {this.props.place.number} {this.props.place.street}</Text>
          <Text>Zipcode: {this.props.place.zipcode}</Text>
          <Text>City: {this.props.place.city}</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 66,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  mapContainer: {
    flex: 1
  },
  info: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginBottom: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});
