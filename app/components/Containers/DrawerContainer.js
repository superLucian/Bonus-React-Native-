// 'use strict'

import React from 'react';
import {
	Text
} from 'react-native';

import Drawer from 'react-native-drawer';

import BaseContainer from './BaseContainer';

import Style from '../../styles/Style';

export default ( props ) => <Drawer
	content=			{ props.content }
	onClose=			{ () => props.closeDrawer() }
	open=				{ props.drawerOpened }
	// openDrawerOffset=	{ Style.DEVICE_HEIGHT < 660 ? Style.DEVICE_WIDTH * .7 : ( Style.DEVICE_HEIGHT < 700 ? 300 : 315 ) }
	openDrawerOffset=	{ .8 }
	// panCloseMask=		{ Style.DEVICE_HEIGHT < 660 ? Style.DEVICE_WIDTH * .7 : ( Style.DEVICE_HEIGHT < 700 ? 300 : 315 )  }
	styles={{
		drawer: {
			flex: 1,
		},
		mainOverlay: {
			backgroundColor: props.drawerOpened ? 'rgba(0,0,0,.3)' : 'transparent',
		},
	}}
	tapToClose=			{ true }
	type=				"displace"
>
	<BaseContainer>
		{ props.children }
	</BaseContainer>
</Drawer>;