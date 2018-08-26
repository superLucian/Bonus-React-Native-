// 'use strict'

import React from 'react';
import {
	Text,
} from 'react-native';

import DrawerContainer from './Containers/DrawerContainer'
import BaseContainer from './Containers/BaseContainer'
import Home from './Home/Home';
import DrawerContent from './Home/Partials/DrawerContent';

import Loader from './Utility/Loader'

export default class HomeContainer extends React.Component {

	componentWillMount(){

		if( this.props.session.user.name === undefined || this.props.session.user.name === null || this.props.session.user.name == '' )
			this.props.dispatch( this.props.sessionActions.requestUserInfo( { userId: this.props.session.user.id } ) );

		if( this.props.products.products && this.props.products.products.length )
			this.props.dispatch( this.props.productsActions.clearProductList() );

	}

	render(){

		if( this.props.session.user.name !== undefined && this.props.session.user.name !== null && this.props.session.user.name != '' )
		{
			return <DrawerContainer { ...this.props } content={ <DrawerContent { ...this.props } /> }>
				<Home { ...this.props } navigator={ this.props.navigator }/>
			</DrawerContainer>;

		}

		return <BaseContainer>
			<Loader color="#FFF" />
		</BaseContainer>;

	}

}