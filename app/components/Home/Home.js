// 'use strict'

import React from 'react';
import {
	Image,
	View
} from 'react-native';

import Style from '../../styles/Style';

import CartIcon from '../Partials/CartIcon';
import Content 	from './Partials/Content';
import Header 	from './Partials/Header';
import MenuIcon from './Partials/MenuIcon';
import Loader from '../Utility/Loader';

export default class Home extends React.Component {
	componentDidMount() {
		this.props.dispatch( this.props.cardsActions.requestUserCards( { userId: this.props.session.user.id  } ) );
	}
	render(){

		return <View style={{ flex: 1 }}>
			<CartIcon 	{ ...this.props } />
			<MenuIcon 	{ ...this.props } />
			<Image
				source={ ( this.props.session.user.id == '0001896309' ? require( '../../img/home/foto-perfil2.png' ) : require( '../../img/home/sin-foto.png' ) ) }
				style={ Style.stylesheet.homeProfileImage }
			/>
			<Header 	{ ...this.props } />
			<Content 	{ ...this.props } />
		</View>;
	}
}