// 'use strict'

import React from 'react';
import {
	Dimensions,
	Image,
	Navigator,
	ScrollView,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import { Text, Spinner } from 'native-base';

export default class Coupons extends React.Component
{
	constructor( props ){
		super( props );
		this.categories = [
			{
				code: 1,
				name: 'Bicicletas',
				image: require( '../../../img/cupones/bicicletas.jpg' )
			},
			{
				code: 2,
				name: 'Alimentos / bebidas',
				image: require( '../../../img/cupones/alimentos.jpg' )
			},
			{
				code: 3,
				name: 'Vestuario / calzado',
				image: require( '../../../img/cupones/vestuario.jpg' )
			},
			{
				code: 4,
				name: 'Puntos por soles',
				image: require( '../../../img/cupones/bonus.jpg' )
			},
			{
				code: 5,
				name: 'Deportes / aire libre',
				image: require( '../../../img/cupones/deporte.jpg' )
			},
			{
				code: 6,
				name: 'Accesorios',
				image: require( '../../../img/cupones/accesorios.jpg' )
			}
		]
		this.tabLabel = "TODOS";
	}

	_items = () => this.categories.map( ( item , index ) => {
		if ( item.code == 4 )
		{
			var onp = () => {
				this.props.navigator.push({
					name: "Coupons",
					category: {
						id: item.code,
						name: item.name
					},
					sceneConfig: Navigator.SceneConfigs.FloatFromRight
				});
			}
		}
		else
			var onp = () => null;

		return <Image source={item.image} key={index} style={ styles.backgroundImage }>
			<TouchableOpacity style={ styles.touchableOpacity } onPress={onp}>
				<Text style={ styles.title }>{ item.name }</Text>
			</TouchableOpacity>
		</Image>

	});

	render() {
		if( ! this.categories )
			return <Spinner color="#FFF" />

		return <ScrollView
				contentContainerStyle=	{ styles.contentContainerStyle }
				tabLabel=				{ this.tabLabel }
				style=					{ styles.scrollView }>
			{ this._items() }
		</ScrollView>;
	}
}

let styles = StyleSheet.create({
	backgroundImage: {
		resizeMode: 'stretch',
		width: ( Dimensions.get('window').width / 2 ),
		height: 210,
		padding: 0,
	},
	scrollView: {
		backgroundColor: '#FFF',
		height: 621,
	},
	title: {
		flex: 1,
		width: ( Dimensions.get('window').width / 2 ),
		maxHeight: 43,
		// paddingBottom: 18,
		paddingTop: 18,
		// paddingLeft: 25,
		// paddingRight: 5,
		alignSelf: 'center',
		color: '#FFF',
		backgroundColor: 'rgba(0,0,0,.5)',
		fontFamily: 'Varela Round',
		textAlign: 'center',
		fontSize: 15,
		lineHeight: 12
	},
	touchableOpacity: {
		flex: 1,
		alignSelf: 'stretch' ,
		flexDirection: 'column' ,
		justifyContent: 'flex-end' ,
		alignItems: 'center'
	},
	contentContainerStyle: {
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap:'wrap',
		justifyContent: 'center',
	}
});