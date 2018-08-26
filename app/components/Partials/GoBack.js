// 'use strict'

import React from 'react';
import {
	Image,
	Navigator,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default ( props ) => <TouchableOpacity
	style={ styles.touchable }
	onPress={ () => {
		props.navigator.pop();
	}}>
	<Image style={ styles.image } source={ require( '../../img/lista-categoria/icon-back.png' ) }/>
</TouchableOpacity>;

let styles = StyleSheet.create({
	touchable:{
		width:40,
		height:40,
		position: 'absolute',
		top: 10,
		left: 15,
		zIndex:5000
	},
	image:{
		width:20,
		height:20,
		resizeMode: 'contain'
	}
});