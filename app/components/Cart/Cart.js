// 'use strict'

import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';

import { Button } from 'native-base';

import ContentContainer from '../Containers/ContentContainer';
import BackHeader from '../Partials/BackHeader';

import Style from '../../styles/Style';

const items = ( props ) => {

	return props.shopping.cart.map(( item , index ) => {

		return <View key={index} style={ styles.itemContainer }>
			<Image style={ styles.itemImage } source={{ uri: ( 'http://www.bonus.com.pe/images/productos/' + item.id + '.jpg' ) }} />
			<Text style={ styles.itemName }>{item.name}</Text>
			<Text style={ styles.itemValue }>{`${item.points} pts. + $/.${item.value}`}</Text>
			<TouchableOpacity
				onPress={() => {
					props.dispatch( props.shoppingActions.removeFromCart( index ) );
				}}
			>
				<Image style={ styles.deleteIcon } source={require( '../../img/cupones/delete.png' )} />
			</TouchableOpacity>
		</View>

	});

}

const total = ( props ) => {

	var totalValue = 0;
	var totalPoints = 0;

	props.shopping.cart.forEach(( item , index ) => {
		totalValue += parseFloat( item.value );
		totalPoints += parseFloat( item.points );
	});

	return <View style={ styles.totalContainer }>
		<Text style={ styles.totalLabel }>
			TOTAL
		</Text>
		<Text style={ styles.totalValues }>
			{`${totalPoints} pts. + $/. ${totalValue}`}
		</Text>
	</View>

}

export default ( props ) => <View style={ { flex: 1 } }>
	<BackHeader title="MI CARRITO" { ...props }/>
	<ContentContainer>
		<View style={ styles.main }>
			{items( props )}
			{total( props )}
			<Button style={ styles.payButton }>Canjear</Button>
		</View>
	</ContentContainer>
</View>;

let styles = StyleSheet.create({
	deleteIcon: {
		width: 40,
		height: 40,
	},
	itemContainer: {
		paddingLeft: 20,
		paddingRight: 20 ,
		flexDirection: 'row',
		alignItems: 'center' ,
		justifyContent: 'center',
		paddingBottom: 10 ,
		paddingTop: 10 ,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,.15)'
	},
	itemImage: {
		width: 80,
		height: 80,
	},
	itemName: {
		flex:1,
		fontSize: 12,
		fontFamily: 'Varela Round',
		marginLeft: 10,
		marginRight: 10,
	},
	itemValue: {
		flex:1,
		color: Style.MAIN_COLOR,
		fontSize: 12,
		fontFamily: 'Oswald',
	},
	main:{
		flex:1,
		alignItems:'center',
	},
	payButton: {
		width: 300,
		alignSelf: 'center',
		borderRadius: 24,
		marginTop: 40,
		backgroundColor: 'rgb(32,76,165)',
	},
	totalContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,.15)',
	},
	totalLabel: {
		paddingLeft: 40,
		flex: 1,
		fontSize: 16,
		fontFamily: 'Oswald',
		fontWeight: 'bold',
		paddingTop: 10,
		paddingBottom: 10,
		textAlign: 'left',
	},
	totalValues: {
		paddingRight: 40,
		flex: 1,
		fontSize: 16, fontFamily: 'Oswald',
		fontWeight: 'bold',
		paddingTop: 10,
		paddingBottom: 10,
		textAlign: 'right'
	},
});

