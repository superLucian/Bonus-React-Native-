// 'use strict'

import React from 'react';
import {
	Image,
	StatusBar,
	StyleSheet,
} from 'react-native';

import StatusBarBackground from '../Partials/StatusBarBackground';

import theme from '../../themes/bonus';

export default ( props ) => <Image source={ require( '../../img/bg.jpg' ) } style={ styles.backgroundImage }>
	<StatusBar barStyle="light-content" />
	<StatusBarBackground />
	{props.children}
</Image>;

let styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		height: null,
		justifyContent: 'center',
		resizeMode: 'cover',
		width: null,
		padding: 0,
		margin: 0,
	}
});