// 'use strict'

import React from 'react';
import {
	Image,
	Navigator,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import { Button } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

export default ( props ) => <Button 
	style={ styles.touchable }
	onPress={ ( event ) => {
		return null;
		if( props.target ){
			props.navigator.push({
				name: props.target,
				sceneConfig: Navigator.SceneConfigs.FadeAndroid
			});
		}
		return null;
	}}
	transparent>
	<Icon name='ios-refresh' color='white' size={35}/>
</Button>;

let styles = StyleSheet.create({
	touchable:{
		width:35,
		height:35,
		position: 'absolute',
		top: 8,
		right: 15,
		zIndex:5000,
	},
});