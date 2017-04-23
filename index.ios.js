"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import FrontPage from "./src/FrontPage"

export default class favPlaces extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FrontPage,
          title: "FavPlaces",
        }}
        style={{flex: 1}}
      />
    );
  }
}


AppRegistry.registerComponent('favouritePlaces', () => favPlaces);
