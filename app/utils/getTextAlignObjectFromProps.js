// 'use strict'

import Style from '../styles/Style';

export default ( props ) => {

	if ( props.center )
		return { textAlign: 'center' }

	if ( props.right )
		return { textAlign: 'right' }

	return {}

};