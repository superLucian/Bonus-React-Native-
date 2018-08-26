// 'use strict'

import React from 'react';
import {
	Text,
	StyleSheet,
	View,
	Image
} from 'react-native';    

export default (props) => <View style={ styles.container }>  
	<View style={ styles.imageContainer }> 
		<Image source={ require('../../img/bonus-logoBlanco300.png') }
			style={ styles.image }
		/>
	</View>
	<View style={ styles.textContainer }>
		<Text style={ styles.title }>{ props.title }</Text>
		<Text style={ styles.subTitle }>{ props.subTitle ? props.subTitle : null }</Text>
	</View>
</View>;

let styles = StyleSheet.create({
	container:{
		flex:1,
	},
	imageContainer: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	subTitle: {
		paddingBottom: 5,
	},
	textContainer: {
		alignItems: 'center',
		flex: 2,
		justifyContent: 'center',
	},
	title:{
		color:'#FFF',
		fontFamily: 'Oswald',
		fontSize:20,
		marginTop: 0,
		textAlign:'center',
	},
	image:{
		height: 58/3.7, // 58
		resizeMode: 'contain',
		width: 300/3.7, // 300
	}
});