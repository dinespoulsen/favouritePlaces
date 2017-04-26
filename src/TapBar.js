"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  TabBarIOS,
  TabBarItemIOS
} from 'react-native';
import PlacesView from "./PlacesView";
import AddPlace from "./AddPlace";


export default class TapBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: "places"
    };
  }

  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          name="places"
          systemIcon="favorites"
          selected={this.state.selectedTab === 'places'}
          onPress={() => {
            this.setState({
              selectedTab: 'places'
            });
          }}>
            <NavigatorIOS style={{flex: 1}} ref="nav"
              initialRoute={{
                component: PlacesView,
                title: "Places",
              }}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="favorites"
          onPress={() => {
            this.props.navigator.pop();
          }}>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          name="addPlace"
          systemIcon="favorites"
          selected={this.state.selectedTab === 'addPlace'}
          onPress={() => {
            this.setState({
              selectedTab: 'addPlace'
            });
          }}>
            <NavigatorIOS style={{flex: 1}} ref="nav"
              initialRoute={{
                component: AddPlace,
                title: "Place",
              }}
            />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
