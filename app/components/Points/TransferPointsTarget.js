// 'use strict'

import React from 'react';
import {
	Image,
	Navigator,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';

import { Picker } from 'native-base';

import Button from '../Partials/Button';

import ContentContainer 	from '../Containers/ContentContainer';
import BackHeader 	from '../Partials/BackHeader';

export default class TransferPoints extends React.Component {
	constructor( props ){
		super( props );
		this.state = {
			idType: '01'
		}
	}
	render(){
		return <View style={ { flex: 1 } }>
			<BackHeader { ...this.props } title="MIS PUNTOS" refreshTarget="Points"/>
			<ContentContainer>
				<View style={ styles.main }>
					<View style={ styles.infoContainer }>
						<Text style={ {textAlign: 'center' , paddingBottom: 10 , fontSize: 13 } }>CUENTA ORIGEN</Text>
						<View style={ styles.textContainer }>
							<View style={ styles.labelContainer }>
								<Text style={ styles.label }>Numero de cuenta</Text>
							</View>
							<View style={ styles.labelContainer }>
								<Text style={ styles.value }>{ this.props.session.user.id ? this.props.session.user.id : null }</Text>
							</View>
						</View>
						<View  style={ styles.textContainer }>
							<View style={ styles.labelContainer }>
								<Text style={ styles.label }>Titular</Text>
							</View>
							<View style={ styles.labelContainer }>
								<Text style={ styles.value }>{ this.props.session.user.name ? this.props.session.user.name : null }</Text>
							</View>
						</View>
						<View style={ styles.textContainer }>
							<View style={ styles.labelContainer }>
								<Text style={ styles.label }>Rol de cuenta</Text>
							</View>
							<View style={ styles.labelContainer }>
								<Text style={ styles.value }>{ this.props.session.user.accountTypeName ? this.props.session.user.accountTypeName : null }</Text>
							</View>
						</View>
						<View style={ styles.textContainer }>
							<View style={ styles.labelContainer }>
								<Text style={ styles.label }>Puntos disponibles</Text>
							</View>
							<View style={ styles.labelContainer }>
								<Text style={ [ styles.value , { color: '#000' } ] }>{ this.props.session.user.currentBalance ? this.props.session.user.currentBalance : null }</Text>
							</View>
						</View>
					</View>
					<View style={ styles.infoContainer }>
						<Text style={ {textAlign: 'center' , paddingBottom: 10 , fontSize: 13 } }>CUENTA DESTINO</Text>
						<View style={ styles.textContainer }>
							<View style={ styles.labelContainer }>
								<Text style={ styles.label }>Numero de cuenta</Text>
							</View>
							<View style={ styles.labelContainer }>
								<TextInput style={ [ styles.value , { color: '#000' , backgroundColor: 'red' , minHeight: 40 } ] } />
							</View>
						</View>
						<View  style={ styles.textContainer }>
							<View style={ styles.labelContainer }>
								<Text style={ styles.label }>Titular</Text>
							</View>
							<View style={ styles.labelContainer }>
								<TextInput style={ [ styles.value , { color: '#000' , backgroundColor: 'red' , minHeight: 40 } ] } />
							</View>
						</View>
						<View style={ styles.textContainer }>
							<View style={ styles.labelContainer }>
								<Text style={ styles.label }>Rol de cuenta</Text>
							</View>
							<View style={ styles.labelContainer }>
								<TextInput style={ [ styles.value , { color: '#000' , backgroundColor: 'red' , minHeight: 40 } ] } />
							</View>
						</View>
						<View style={ styles.textContainer }>
							<View style={ styles.labelContainer }>
								<Text style={ styles.label }>Puntos disponibles</Text>
							</View>
							<View style={ styles.labelContainer }>
								<TextInput style={ [ styles.value , { color: '#000' , backgroundColor: 'red' , minHeight: 40 } ] } />
							</View>
						</View>
					</View>
				</View>
				<View style={ { flex: 1 } }>
					<TouchableOpacity
						onPress={ ( event ) => {
							this.props.navigator.push({
							    name: "ConfirmTransferPoints",
							    sceneConfig: Navigator.SceneConfigs.FloatFromRight
							});
						}}
					>
						<Text style={ { textAlign: 'center',color: '#194B7C',fontSize: 26, fontWeight: 'bold', fontFamily: 'Oswald' } }>100</Text>
						<Text style={ { textAlign: 'center',color: 'rgba(0,0,0,.15)',fontSize: 13 } }>Puntos a transferir</Text>
					</TouchableOpacity>
				</View>
			</ContentContainer>
		</View>;
	}
}

let styles = StyleSheet.create({
	caret:{
		position: 'absolute',
		right: 10,
		top: 12,
		width:12,
		height:12,
		resizeMode: 'contain'
	},
	infoContainer: {
		flex: 2,
		padding: 20,
		paddingTop: 30,
	},
	textContainer: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,.15)',
		maxHeight: 40,
		justifyContent: 'space-between',
	},
	main:{
		flex:3,
		padding:20,
	},
	labelContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		color: 'black',
		fontFamily: 'Varela Round',
		fontSize: 13,
	},
	valueContainer: {

	},
	value:{
		color: 'rgba(0,0,0,.3)',
		fontFamily: 'Varela Round',
		fontSize: 13,
		textAlign: 'right',
		alignSelf: 'flex-end',
	},
	inputsContainer: {
		flex: 1,
		padding: 20,
	},
	transferPointsContainer: {
		marginBottom: 10,
		flex: 1,
	},
	selector: {
		flex: 1,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,.1)',
		borderRadius: 6,
		paddingLeft: 10,
		paddingRight: 10,
		minHeight: 40,
		// alignSelf: 'stretch' , justifyContent: 'flex-start', alignItems: 'center', left: 0
	},
	textInput: {
		flex: 1,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,.1)',
		borderRadius: 6,
		paddingLeft: 10,
		paddingRight: 10,
		minHeight: 40,
		fontSize: 12,
	},
	authContainer: { 
		marginBottom: 10,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
});

