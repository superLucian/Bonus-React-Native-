// 'use strict'

import Style from '../styles/Style';

export default ( props ) => {

	let fs = props.fontSize ? props.fontSize : 'default';

	switch( fs.toLowerCase() ) {
		case 'xs':
			return {
				fontSize: Style.FONT_SIZE_SMALLER
			}
		case 'sm':
			return {
				fontSize: Style.FONT_SIZE_SMALL
			}
		case 'lg':
			return {
				fontSize: Style.FONT_SIZE_TITLE
			}
		default:
			return {
				fontSize: Style.FONT_SIZE
			}
	}

	return {};

};