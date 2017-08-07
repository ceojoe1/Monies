/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 import {StackNavigator} from 'react-navigation';
 import Accounts from './Components/Accounts.js';
 
 console.disableYellowBox = true
 
const monies = StackNavigator({
  Accounts: {screen: Accounts},
  

}, {
  transitionConfig: () => ({ screenInterpolator: () => null}),
  initialRouteName: 'Accounts',
}); 
 
AppRegistry.registerComponent('monies', () => monies);
