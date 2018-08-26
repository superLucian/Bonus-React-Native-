// 'use strict'

import React from 'react';
import {Button} from 'native-base';
import {Dimensions} from 'react-native';

export default class Btn extends React.Component{
	render(){
		var window = Dimensions.get('window');
		let bgcolor,textcolor

		if (this.props.invert){
			bgcolor='transparent';
			textcolor='rgb(32,76,165)';
		}else{
			bgcolor='rgb(32,76,165)';
			textcolor='#FFF';
		}
		return(

			<Button
			transparent={this.props.invert}
			onPress={this.props.onPress}
			textStyle={{color:textcolor}}
			style={{

					alignSelf:'center',
					width:window.width*0.8,
					marginTop: 20,
					borderRadius: 20,
					shadowColor: 'transparent',
					backgroundColor:bgcolor
				}}
			block bordered>
			{this.props.text}
			</Button>

			);

	}

}

