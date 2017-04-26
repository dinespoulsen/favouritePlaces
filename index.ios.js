"use strict";

import React, { Component } from 'react';
import { AppRegistry, View, Navigator } from 'react-native';
import FrontPage from "./src/FrontPage";
import TapBar from "./src/TapBar";


export default class favPlaces extends Component {

  renderScene(route, navigator) {
    var routeId = route.id;
    switch(routeId){
      case "frontPage":
        return (<FrontPage navigator={navigator} />);
        break;
      case "tapbar":
        return (<TapBar navigator={navigator}></TapBar>)
      default:
        return null
      }
  }

  render() {
    return (
      <Navigator initialRoute={{id: 'frontPage'}} renderScene={this.renderScene.bind(this)}>

      </Navigator>
    );
  }
}

AppRegistry.registerComponent('favouritePlaces', () => favPlaces);
