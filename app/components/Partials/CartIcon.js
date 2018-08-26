// 'use strict'

import React from 'react';
import {
	Image,
	Navigator,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default ( props ) => (
	<TouchableOpacity style={ styles.touchable }
		onPress={ ( event ) => {
			props.navigator.push({
				name: "Cart",
				sceneConfig: Navigator.SceneConfigs.FloatFromBottom
		});
	}}>
		<View style={{alignItems: 'center', justifyContent: 'center' , position: 'absolute' , top: -4, right: -8, backgroundColor: '#FFC300' , zIndex: 10000, width: 20, height:20 , borderRadius: 50,}}>
			<Text style={{color: '#FFF' , textAlign: 'center'}}>{props.shopping && props.shopping.cart && props.shopping.cart.constructor === Array ? props.shopping.cart.length : 0}</Text>
		</View>
		<Image style={ styles.image } source={ require( '../../img/lista-categoria/icon-cart.png' ) }/>
	</TouchableOpacity>
);

let styles = StyleSheet.create({
	touchable:{
		width:20,
		height:20,
		position: 'absolute',
		top: 8,
		right: 20,
		zIndex:50
	},
	image:{
		width:20,
		height:20,
		resizeMode: 'contain'
	}
});