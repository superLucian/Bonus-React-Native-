// 'use strict'

import React from 'react'
import {
	Navigator,
	Text,
	View
} from 'react-native';

import AddCardContainer 					from './AddCardContainer';
import CardContainer 						from './CardContainer';
import CardsContainer 						from './CardsContainer';
import CartContainer 						from './CartContainer';
import CatalogContainer 					from './CatalogContainer';
import CouponsContainer 					from './CouponsContainer';
import EditCardContainer 					from './EditCardContainer';
import HomeContainer 						from './HomeContainer';
import MovementsContainer 					from './MovementsContainer';
import PointsContainer 						from './PointsContainer';
import PointsMovementsContainer 			from './PointsMovementsContainer';
import ProductContainer 					from './ProductContainer';
import SessionContainer 					from './SessionContainer';
import TransferPointsContainer 				from './TransferPointsContainer';
import TransferPointsContinuedContainer 	from './TransferPointsContinuedContainer';
import WalletContainer 						from './WalletContainer';

export default class AppNavigator extends React.Component
{

	_renderScene = ( route , navigator ) => {

		switch ( route.name ) {

			case 'AddCard':
				return <AddCardContainer 					{ ...this.props } navigator={ navigator }/>;

			case 'Card':
				return <CardContainer 						{ ...this.props } navigator={ navigator } card={ route.card }/>;

			case 'Cards':
				return <CardsContainer 						{ ...this.props } navigator={ navigator }/>;

			case 'Cart':
				return <CartContainer						{ ...this.props } navigator={ navigator }/>

			case 'Catalog':
				return <CatalogContainer    				{ ...this.props } navigator={ navigator } category={ route.category }/>;

			case 'Coupons':
				return <CouponsContainer 					{ ...this.props } navigator={ navigator } category={ route.category } view="Coupon"/>

			case 'CouponConfirm':
				return <CouponsContainer 					{ ...this.props } navigator={ navigator } category={ route.category } view="Confirm"/>

			case 'EditCard':
				return <EditCardContainer 					{ ...this.props } navigator={ navigator } card={ route.card }/>;

			case 'Home':
				return <HomeContainer 						{ ...this.props } navigator={ navigator }/>;

			case 'Movements':
				return <MovementsContainer 					{ ...this.props } navigator={ navigator } card={ route.card }/>;

			case 'Points':
				return <PointsContainer 					{ ...this.props } navigator={ navigator }/>;

			case 'PointsMovements':
				return <PointsMovementsContainer 			{ ...this.props } navigator={ navigator }/>;

			case 'Product':
				return <ProductContainer 					{ ...this.props } navigator={ navigator } product={ route.product }/>;

			case 'TransferPoints':
				return <TransferPointsContainer 			{ ...this.props } navigator={ navigator }/>;

			case 'TransferPointsContinued':
				return <TransferPointsContinuedContainer 	{ ...this.props } navigator={ navigator }/>;

			case 'Wallet':
				return <WalletContainer 					{ ...this.props } navigator={ navigator }/>;

			default:
				return <View style={ { flex: 1 , justifyContent: 'center' , alignItems: 'center' } }>
					<Text>{`Undefined route: ${route.name}`}</Text>
				</View>

		}
	}

	render() {
		return <Navigator
			configureScene={ (route) => ({ ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight }) }
			initialRoute={ { name: 'Home' } }
			renderScene={ (route , navigator ) => this._renderScene( route , navigator )}
			style={ { flex: 1 } }
		/>;
	}
}