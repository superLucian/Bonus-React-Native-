// 'use strict'

import React from 'react';
import {
	StyleSheet,
	View
} from 'react-native';

import { Text } from 'native-base';

import GoBack from '../Partials/GoBack';
import CartIcon from '../Partials/CartIcon';
import CustomTabBar from './Partials/CustomTabBar'
import Header from './Partials/Header';
import ProductList from './Partials/ProductList';

import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class Catalog extends React.Component {

	render() {
		return <View style={ styles.container }>
			<GoBack {...this.props} />
			<CartIcon {...this.props}/>
			<Header { ...this.props } />
			<ScrollableTabView
				style={ styles.scrollableTabView }
				tabBarUnderlineStyle={ styles.tabBarUnderline }
				tabBarActiveTextColor={ styles.tabBarActiveText.color }
				tabBarInactiveTextColor={ styles.tabBarInactiveText }
				renderTabBar={() => <CustomTabBar />}
			>
				<ProductList { ...this.props } tabLabel="CATALOGO BONUS"/>
			</ScrollableTabView>
		</View>;
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 0
	},
	scrollableTabView: {
		backgroundColor: 'rgba(0,0,0,0)',
		paddingTop: 8
	},
	tabBarUnderline: {
		height: 2,
		backgroundColor: 'rgba(0,0,0,0)'
	},
	titleText: {
		color: '#FFF',
		fontSize: 22,
		textAlign: 'center'
	},
	tabBarActiveText: {
		color: '#FFF'
	},
	tabBarInactiveText: {
		color: 'rgba(255,255,255,.4)'
	}
});