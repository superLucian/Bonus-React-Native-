// 'use strict'

import React from 'react';
import {
	Image,
	Navigator,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default ( props ) => (
		<TouchableOpacity 
			onPress={ ( event ) => {

				props.navigator.push({
					name: props.goto,
					sceneConfig: Navigator.SceneConfigs.FloatFromRight
				});

			}}
			style={ styles.touchableOpacity }>
			<Image style={ styles.image } source={ props.icon}/>
			<Text style={styles.text}> {props.text} </Text>
		</TouchableOpacity>
);

var box = 20;

const styles = StyleSheet.create({

	touchableOpacity: {

		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,.2)',
		paddingTop: 26,
		paddingBottom: 26

	},

	image:{

		alignSelf:'center',
		width: box,
		height: box,
		resizeMode: 'contain',
	},

	text:{
		paddingTop: 10,
		color: '#37587b',
		fontSize: 10,
		fontWeight: 'bold'
	}
});