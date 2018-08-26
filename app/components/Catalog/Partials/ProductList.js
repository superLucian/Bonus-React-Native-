// 'use strict'

import React from 'react';
import {
	Dimensions,
	Image,
	Navigator,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View
} from 'react-native';

import { Tabs, Text, Spinner } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import Icon from 'react-native-vector-icons/Ionicons';

import ProductListToolbar from './ProductListToolbar';

import Loader from '../../Utility/Loader';

export default class ProductList extends React.Component
{

	componentDidMount(){

		this.props.dispatch( this.props.productsActions.requestProductList( { categoryId: this.props.category.id } ) );

	}

	_items(){

		return this.props.products.products.map( ( item , index ) => {

			return <View key={index} style={{ width: ( Dimensions.get('window').width / 2 ) , maxHeight: 280,paddingTop: 32}}>
				<TouchableOpacity
					onPress={() => {

						this.props.navigator.push({
							name: "Product",
							product: {
								id: item.code,
								category: this.props.category.name
							},
							sceneConfig: Navigator.SceneConfigs.FloatFromRight
						});

					}}
				>
					<Text style={{ fontFamily: 'Varela Round' ,paddingBottom: 20,alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>{ item.name }</Text>
					<Image source={{ uri: ( 'http://www.bonus.com.pe/images/productos/' + item.code + '.jpg' ) }} style={{marginBottom: 20,alignSelf:'center',width:120,height:120,resizeMode: 'contain',}} />
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',paddingBottom:5}}>
						<Icon name="ios-star" size={10} color="gold" />
						<Icon name="ios-star" size={10} color="gold" />
						<Icon name="ios-star" size={10} color="gold" />
					</View>
					<Text style={{paddingBottom: 4,fontWeight: 'bold',alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>{ item.points + 'pts. $/.' + item.plusValue }</Text>
					<Text style={{alignSelf:'center',textAlign: 'center',fontSize: 10,width: 120, lineHeight: 9, color: 'rgba(0,0,0,.6)'}}>{ item.points2 + 'pts. $/.' + item.plusValue2 }</Text>
				</TouchableOpacity>
			</View>

		});

	}

	render() {

		if( this.props.products.loading || !this.props.products.products || !this.props.products.products.length )
			return <Loader color="#FFF" />

		return (
			<ScrollView contentContainerStyle={{flexWrap:'wrap' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center' ,}} tabLabel="TODOS" style={{ height: 500 ,backgroundColor: '#FFF' }}>
				{ this._items() }
			</ScrollView>
		);

	}
}