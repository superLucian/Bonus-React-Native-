// 'use strict'

import React from 'react';
import {Button, Input, InputGroup} from 'native-base';
import {
	Modal,
	TextInput,
	Text,
	StyleSheet,
	Dimensions,
	View
} from 'react-native';

export default class PopUp extends React.Component{
	render() {
	 	return <View>
			<Modal
			animationType={"fade"}
			transparent={true}
			visible={this.props.modalVisible}
			onRequestClose={() => this.props.cloaseModal()} >
			 	<View style={styles.container}>
			 		<View style={styles.boxContainer}>
					 	<Text style={styles.message}>Recuperar Clave</Text>
					 	<InputGroup style={styles.inputGroup} borderType={'regular'}>
					 		<Input
					 			style={styles.textInput}
					 			placeholder="Correo electrónico"
					 			placeholderTextColor={"rgba(0,0,0,.33)"}
					 		/>
					 	</InputGroup>
					 	<Button block rounded
					    onPress={ () => this.props.closeModal() }
					    style={[styles.button,{width:window.width*0.4}]}
					    >
					    	Enviar
					    </Button>
				    </View>
			    </View>
		    </Modal>
		</View>;
	}
}

 var window = Dimensions.get('window');

 let styles = StyleSheet.create({
 	boxContainer:{
 		justifyContent:'space-between',
 		alignSelf:'center',
 		height: window.width*0.75,
 		width: window.width*0.75,
 		backgroundColor:'#eee',
 		borderRadius:7,

 	},
 	textInput: {
 		// fontSize: 11,
 		fontFamily: 'Varela Round',
 		color: '#000'
 	},
 	inputGroup: {
 		borderColor: 'rgba(0,0,0,.15)',
 		borderRadius: 6,
 		margin: 14,
 	},
 	message:{
 		textAlign:'center',
 		fontSize:20,
 		paddingTop:20
 	},
 	container:{
 		flex:1,
 		backgroundColor:'rgba(11,11,11,.5)',
 		flexDirection: 'column',
 		justifyContent:'center',
 		alignItems:'center',
 	},
 	button:{
 		backgroundColor: 'rgb(32,76,165)',
 		borderRadius: 20,
 		shadowColor: 'transparent',
 		width: window.width * 0.8,
 		alignSelf:'center',
 		justifyContent:'center',
 		margin:20
 	}

 });
