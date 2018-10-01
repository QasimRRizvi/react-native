/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SignIn from './src/feature/signin/SignIn'
export default class App extends Component {
  render() {
    return (
      <SignIn />
    );
  }
}
