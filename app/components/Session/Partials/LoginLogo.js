// 'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';

export default () => (
	<View style={styles.logoContainer} >
		<Image style={styles.logo} source={require('../../../img/bonus-logoBlanco300.png')} />
	</View>
);

let styles = StyleSheet.create({
	logo: {
		resizeMode: 'contain',
		height: 58/1.7, // 58
		width: 300/1.7, // 300
		marginTop: 2,
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'center',
		paddingLeft: 100,
		paddingRight: 100,
	},
});