/**
 * Bonus Android
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Provider } from 'react-redux'

import store from './app/store/store.js'

import App from './app/App'

export default class Bonus extends Component {
  render() {
    return (
	<Provider store={store}>
		<App />
	</Provider>
    );
  }
}

AppRegistry.registerComponent( 'bonus' , () => Bonus );
