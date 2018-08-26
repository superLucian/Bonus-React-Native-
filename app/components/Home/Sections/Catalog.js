// 'use strict'

import React from 'react';
import {
	Image,
	Navigator,
	StyleSheet,
	TouchableHighlight,
	ScrollView
} from 'react-native';

import { ListItem, Text , Icon } 				from 'native-base';
import { Col, Row, Grid } 						from "react-native-easy-grid";
import ScrollableTabView, { DefaultTabBar, } 	from 'react-native-scrollable-tab-view';

import theme from '../../../themes/bonus';

import Style from '../../../styles/Style';

const from_redux = {
	categories: [
		{
			name: 'PARA ELLAS',
			number_of_articles: 34,
			img: require('../../../img/home/ellas-bg350x100.jpg'),
			categoryId: 11
		},
		{
			name: 'PARA ELLOS',
			number_of_articles: 24,
			img: require('../../../img/home/ellos-bg350x100.jpg'),
			categoryId: 12
		},
		{
			name: 'INFANTIL Y JÓVENES',
			number_of_articles: 123,
			img: require('../../../img/home/infantil-bg350x100.png'),
			categoryId: 10
		},
		{
			name: 'PARA EL HOGAR',
			number_of_articles: 46,
			img: require('../../../img/home/home-bg350x100.jpg'),
			categoryId: 42
		},
		{
			name: 'FITNESS Y SALUD',
			number_of_articles: 52,
			img: require('../../../img/home/fitnnesbg350x100.jpg'),
			categoryId: 72
		},
		{
			name: 'NAVIDAD',
			number_of_articles: 52,
			img: require('../../../img/home/navidad-bg350x100.png'),
			categoryId: 23
		},
		{
			name: 'VERANO',
			number_of_articles: 32,
			img: require('../../../img/home/verano-bg-350x100.png'),
			categoryId: 8
		},
		{
			name: 'ENTRETENIMIENTO',
			number_of_articles: 12,
			img: require('../../../img/home/entretenimiento-bg350x100.png'),
			categoryId: 51
		},
		{
			name: 'SERVICIOS',
			number_of_articles: 71,
			img: require('../../../img/home/servicios-bg-350x100.png'),
			categoryId: 23
		}
	]
}

export default ( props ) => {
	const items = from_redux.categories.map( ( item , index ) => {
		return <ListItem
				key={ index }
				style={ styles.listItem }
			>
				<Image style={ styles.goToCategoryIcon } source={ require( '../../../img/home/btn-category.png' ) } />
				<TouchableHighlight onPress={ ( event ) => {
						props.navigator.push({
							name: "Catalog",
							category: {
								id: item.categoryId,
								name: item.name,
								numberOfArticles: item.number_of_articles
							},
							sceneConfig: Navigator.SceneConfigs.FloatFromRight
						});
					}}
					underlayColor='rgba(0,0,0,.99)'
				>
					<Image source={ item.img } style={ styles.image }>
					    <Text style={ styles.itemName }>{ item.name }</Text>
					    <Text style={ styles.itemCount }>{ item.number_of_articles } articulos</Text>
				    </Image>
			    </TouchableHighlight>
			</ListItem>;
	});
	return <ScrollView style = { {flex: 1 }}>
		{items}
	</ScrollView>;
}

let styles = StyleSheet.create({
	goToCategoryIcon: {
		height:31,
		resizeMode: 'contain',
		position: 'absolute',
		top: 35,
		right:13,
		zIndex: 5,
	},
	icon: {
		color: 'rgb(31,75,164)',
		paddingRight: 20
	},
	image: {
		height: 100,
		width: Style.DEVICE_WIDTH
	},
	itemCount: {
		color: 'rgba(255,255,255,.9)',
		fontSize: 13,
		zIndex: 15,
		position: 'absolute',
		left: 20,
		top: 50
	},
	itemName: {
		fontWeight: 'bold',
		fontFamily: 'Oswald',
		color: '#FFF',
		fontSize: 19,
		zIndex: 15,
		position: 'absolute',
		left: 20,
		top: 30,
	},
	listItem: {
		padding: 0, marginLeft: -2, marginBottom: -2
	}
});