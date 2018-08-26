// 'use strict'

import React from 'react';
import {
	Navigator,
	StyleSheet,
	View,
	Text
} from 'react-native';

import Button from '../Partials/Button';

import ContentContainer 	from '../Containers/ContentContainer';
import BackRefreshHeader 	from '../Partials/BackRefreshHeader';

export default ( props ) => <View style={ { flex: 1 } }>
	<BackRefreshHeader { ...props } title="ÚLTIMOS MOVIMIENTOS" refreshTarget="Points"/>
	<ContentContainer>
		<View style={ styles.main }>
			<Text style={ styles.balance }>{ props.session.user.currentBalance ? props.session.user.currentBalance : '0' }</Text>
			<Text style={ styles.body }>Puntos disponibles</Text>
			<View style={ styles.questionWrapper }>
				<Text style={ styles.question }>¿Cómo gano un punto Bonus?</Text>
			</View>
			<Text style={[ styles.body, styles.explanation ]}>
				Acumulas 1 punto por cada $/. 7.50 de consumo en nuestras marcas asociadas presentando tu Bonus y listo! Empieza a disfrutar.
			</Text>
		</View>
		<View style={ { flex: 1 } }>
			<Button invert text="Últimos movimientos" onPress={
				(event)=>{
					props.navigator.push({
						name: "PointsMovements",
						sceneConfig: Navigator.SceneConfigs.FloatFromRight
					});
				}
			}/>
			<Button text="Transferir Puntos"
				onPress={ ( event ) => {
					props.navigator.push({
					    name: "TransferPoints",
					    sceneConfig: Navigator.SceneConfigs.FloatFromRight
					});
				}}
			/>
		</View>
	</ContentContainer>
</View>;

let styles = StyleSheet.create({
	balance:{
		alignSelf:'center',
		fontSize: 56,
		color: '#194B7C',
		paddingTop:30,
		fontFamily: 'Oswald',
		fontStyle: 'italic',
		fontWeight: '300'
	},
	body:{
		fontSize: 13,
		color: 'rgba(0,0,0,.3)',
		textAlign:'center',
		justifyContent:'center',
		paddingTop: 10,
		fontFamily: 'Varela Round'
	},
	explanation: {
		paddingLeft: 10,
		paddingRight: 10
	},
	main:{
		flex: 2,
		alignItems:'center',
		padding:20,
	},
	question: {
		fontFamily: 'Varela Round',
		textAlign:'center',
		fontSize:18,
		color: 'black'
	},
	questionWrapper: {
		paddingTop:25,
		marginLeft:5,
		marginRight:5,
		marginTop: 15,
		marginBottom: 20,
		borderTopWidth:2,
		borderTopColor:'rgba(0,0,0,.15)'
	}
});

