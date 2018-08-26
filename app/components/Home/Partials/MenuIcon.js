// 'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default ( props ) => (
	<TouchableOpacity style={ styles.touchable }
		onPress={() => {
			props.openDrawer();
		}}
	>
		<Image style={ styles.image } source={ require( '../../../img/icon-menu.png' ) }/>
	</TouchableOpacity>
);

let styles = StyleSheet.create({
	touchable:{
		width:40,
		height:40,
		position: 'absolute',
		top: 8,
		left: 15,
		zIndex:5000
	},
	image:{
		width:20,
		height:20,
		resizeMode: 'contain'
	}
});