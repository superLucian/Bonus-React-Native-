// 'use strict'

import React from 'react';
import { StyleSheet, Text } from 'react-native';

import getFontSizeStyleObjectFromProps from '../../utils/getFontSizeStyleObjectFromProps';
import getTextAlignObjectFromProps from '../../utils/getTextAlignObjectFromProps';
import getColorObjectFromProps from '../../utils/getColorObjectFromProps';

import Style from '../../styles/Style';

export default ( props ) => <Text
	numberOfLines={ props.lines }
	style={[
		styles.base,
		getFontSizeStyleObjectFromProps( props ),
		getTextAlignObjectFromProps( props ),
		getColorObjectFromProps( props ),
		props.style ? props.style : {}
	]}>
	{ props.children }
</Text>;

const styles = StyleSheet.create({
	base: {
		fontFamily: Style.MAIN_FONT,
		fontSize: Style.FONT_SIZE,
	}
});