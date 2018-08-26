// 'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';

import { Text } from 'native-base';

import HeaderContainer from '../../Containers/HeaderContainer';

import { Col, Grid } from "react-native-easy-grid";

import MainFont from '../../Utility/MainFont';

import Style from '../../../styles/Style';

export default ( props ) => <HeaderContainer>
	<View style={ styles.container }>
		<View style={ Style.stylesheet.homeUserInfo }>
			<MainFont fontSize='lg' lines={1} style={ { color: Style.WHITE } }>{ props.session.user.name }</MainFont>
			<View style={ { flex:1, flexDirection: 'row' } }>
				<Image source={ require( '../../../img/home/icon-id.png' ) } style={{marginTop: 4, marginRight: 4, width: 10, height: 10}}/>
				<MainFont fontSize='xs' lines={1} style={ { color: Style.WHITE } }>{ props.session.user.id }</MainFont>
			</View>
		</View>
	</View>
</HeaderContainer>;

let styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		// paddingLeft:35,
		// paddingRight: 35,
		flexDirection: 'row',
	},
});