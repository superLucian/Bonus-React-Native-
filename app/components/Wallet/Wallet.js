// 'use strict'

import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Navigator,
	Text,
	Image
} from 'react-native';

import Modal   				from '../Partials/Modal';
import BackRefreshHeader 	from '../Partials/BackRefreshHeader';
import ContentContainer 	from '../Containers/ContentContainer';
import Loader 				from  '../Utility/Loader';
import RadiusButton 		from  '../Utility/RadiusButton';

export default class Wallet extends React.Component{
	render() { 

		if( this.props.cards.cards.constructor !== Array || 
			this.props.cards.cards.length < 1 
			|| this.props.cards.cards[0] === undefined 
			|| this.props.cards.cards[0] === null 
		)
			return <Loader color="#FFF" />;

		return <View style={ { flex: 1 } }>
			<BackRefreshHeader { ...this.props } title="MI SALDO" refreshTarget="Wallet"/>
			<ContentContainer>
				<View style={ styles.mainContent }>
					<Text style={ styles.balance }>S./ { ( this.props.cards.cards[0] ? this.props.cards.cards[0].cardBalance : '' ) || '' }</Text>
					<Text style={ styles.body }>Saldo disponible</Text>
					<View style={ styles.bigTextContainer }>
						<Text style={ styles.bigText }>
							Para pagar con Bonus, necesitas tener saldo en tu cuenta Bonus.
						</Text>
					</View>
					<Text style={styles.body}>Si no tienes saldo, puedes recargar saldo con tu tarjeta vinculada,
					o a través de nuestros establecimientos colaboradores.
					</Text>
				</View>
				<View style={ styles.button }>
					<RadiusButton text="Mis Tarjetas" 
						onPress={ ( event ) => {

							this.props.navigator.push({
								name: "Cards",
								sceneConfig: Navigator.SceneConfigs.FloatFromRight
							});

						}}
					/>
				</View>
			</ContentContainer>
		</View>;
	}
}

let styles = StyleSheet.create({
	bigText: {
		fontFamily: 'Varela Round',
		textAlign:'center',
		fontSize:18,
		color: 'black',
	},
	bigTextContainer: {
		paddingTop:25,
		marginLeft:5,
		marginRight:5,
		marginTop: 15,
		marginBottom: 20,
		borderTopWidth:2,
		borderTopColor:'rgba(0,0,0,.15)'
	},
	button: {
		backgroundColor: '#FFF',
		flex: 1,
		padding:25
	},
	mainContent:{
		flex: 3,
		alignItems:'center',
		padding:20
	},
	body:{
		fontSize: 13,
		color: 'rgba(0,0,0,.3)',
		textAlign:'center',
		justifyContent:'center',
		paddingTop: 10,
		fontFamily: 'Varela Round'
	},
	balance:{
		fontSize: 56,
		color: '#194B7C',
		alignSelf:'center',
		paddingTop:30,
		fontFamily: 'Oswald',
		fontStyle: 'italic',
		fontWeight: '300'

	}
});