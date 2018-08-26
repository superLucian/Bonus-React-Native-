// "use strict"

import React from "react-native";
import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
	return unit * value;
}

// Constants
// Base
const base = {};
base.borderWidth 	= em(.1);
base.borderColor 	= 'rgba(0,0,0,.15)';
base.mainColor 		= 'rgb(32,76,165)';
base.mainColorAccent= 'rgb(31,75,164)';
base.mainBgColor	= '#FFF';
base.mainFont 		= 'Varela Round';
base.secondaryFont 	= 'Oswald';
base.black 			= '#000';
base.white			= '#FFF';
base.gray0			= 'rgba(0,0,0,.3)';
// Home
const home = {};
home.profileImageSize = 5.2;

// Then we set our styles with the help of the em() function
export default {
	// CONSTANTS
	// GENERAL
	DEVICE_WIDTH: x,
	DEVICE_HEIGHT: y,
	RATIO_X: ratioX,
	RATIO_Y: ratioY,
	UNIT: em(1),
	PADDING: em(1.25),
	// CARD
	// CARD_WIDTH: x - em(1.25) * 2,
	// CARD_HEIGHT: (x - em(1.25) * 2) * (3/5),
	// CARD_PADDING_X: em(1.875),
	// CARD_PADDING_Y: em(1.25),
	// FONT
	FONT_SIZE: em(1),
	FONT_SIZE_SMALLER: em(0.75),
	FONT_SIZE_SMALL: em(0.875),
	FONT_SIZE_TITLE: em(1.25),
	// BASE
	MAIN_COLOR: base.mainColor,
	MAIN_COLOR_ACCENT: base.mainColorAccent,
	MAIN_FONT: base.mainFont,
	SECONDARY_FONT: base.secondaryFont,
	BLACK: base.black,
	WHITE: base.white,
	GRAY0: base.gray0,

	// STYLESHEETS
	// PROFILE IMAGE
	stylesheet: StyleSheet.create({
		homeProfileImage: {
			top: em(1.8),
			left: em(2),
			position: 'absolute',
			width: em(home.profileImageSize),
			height: em(home.profileImageSize),
			borderRadius: em(home.profileImageSize/2),
			borderWidth: base.borderWidth,
			borderColor: base.borderColor,
			zIndex: 500,
		},
		homeUserInfo: {
			marginTop: ( y < 570 ? .2 * em(1) : em(1) ),
			marginLeft: em(7.5),
			maxWidth: x * .9
		},
		homeSummarySection: {
			height: em(6.5),
			backgroundColor: base.mainBgColor,
			paddingLeft: 30,
			paddingRight: 30,
			paddingTop: 26
		},
		homeTabBar: {

		},
		homeTabButton: {
			paddingTop: 0,
			paddingBottom: 10,
		},
		homeTabWrapper: {
			paddingLeft: 20 ,
			paddingRight: 20 ,
			marginBottom: 3,
			borderBottomWidth: 3,
		},
		homeTabsWrapper: {
			flexDirection: 'row',
			justifyContent: 'space-around',
			paddingTop: 8,
			borderWidth: 0,
			borderTopWidth: 2,
			borderLeftWidth: 0,
			borderRightWidth: 0,
			borderTopColor: 'rgba(255,255,255,0.2)',
		},
		productImage: {
			alignSelf: 'center',
			marginTop: x * .05,
			resizeMode: 'contain',
			height: y * .2,
			width: x * .6,
		}
	})

};