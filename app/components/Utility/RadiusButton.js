// 'use strict'

import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'native-base';

import Style from '../../styles/Style';

export default ( props ) => <Button
	block
	disabled=	{ props.disabled ? props.disabled : false }
	onPress=	{ props.onPress }
	textStyle=	{ props.inverted ? styles.invertedText : styles.text }
	style=		{ props.inverted ? styles.invertedButton : styles.button }>
	{ props.text }
</Button>;

const styles = StyleSheet.create({
	button: {
		backgroundColor: Style.MAIN_COLOR,
		borderRadius: ( 10 * Style.UNIT),
		shadowColor: 'transparent'
	},
	invertedButton: {
		borderColor: Style.MAIN_COLOR,
		borderWidth: 1,
		backgroundColor: Style.WHITE,
		borderRadius: ( 10 * Style.UNIT),
		shadowColor: 'transparent'
	},
	text: {
		fontSize: Style.FONT_SIZE_SMALL,
		fontFamily: Style.MAIN_FONT
	},
	invertedText: {
		fontSize: Style.FONT_SIZE_SMALL,
		fontFamily: Style.MAIN_FONT,
		color: Style.MAIN_COLOR
	}
});