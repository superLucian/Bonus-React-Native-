// 'use strict'

import Style from '../styles/Style';

export default ( props ) => {

	if ( props.color )
		return { color: props.color }

	return {}

};