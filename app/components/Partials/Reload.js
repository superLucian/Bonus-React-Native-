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
	onPress={ ( event ) => {
		props.navigator.push({
			name: "Wallet",
			sceneConfig: Navigator.SceneConfigs.FloatFromLeft
		});
	}}>
	<Image style={ styles.image } source={ require( '../../img/lista-categoria/icon-back.png' ) }/>
</TouchableOpacity>;

let styles = StyleSheet.create({
	touchable:{
		width:20,
		height:20,
		position: 'absolute',
		top: 10,
		right: 15,
		zIndex:50
	},
	image:{
		width:20,
		height:20,
		resizeMode: 'contain'
	}
});

// 				   <Button transparent>
//                    	<BackIcon/> 
//                    </Button>	                   	                    
//                    <Thumbnail square source={ require( '../../img/bonus-logoBlanco300.png' ) } style={ styles.logo }/>                
//                    <Button transparent>
//                        <Icon name='ios-refresh' color='white'/>
//                    </Button>