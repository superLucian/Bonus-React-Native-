// 'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';

import { Text } from 'native-base';

export default ( props ) => (

	<View>
		<View>
			<Image style={ styles.logo } source={ require('../../../img/bonus-logoBlanco300.png') } />
		</View>
		<View style={ styles.titleSection }>
			<Text style={ styles.titleText }>{ props.category.name }</Text>
			<Text style={ styles.itemCountText }>{ props.category.numberOfArticles } articulos</Text>
		</View>
	</View>

);

let styles = StyleSheet.create({
	logo: {
		width: 300/4,
		height: 58/4,
		alignSelf: 'center',
		resizeMode: 'contain',
		marginTop: 10,
		marginBottom: 24,
	},
	itemCountText: {
		color: '#FFF',
		fontSize: 12,
		textAlign: 'center',
		fontFamily: 'Varela Round',
	},
	titleSection: {
		paddingBottom: 0
	},
	titleText: {
		color: '#FFF',
		fontSize: 22,
		textAlign: 'center',
		fontFamily: 'Varela Round',
		lineHeight: 22,
	}
});