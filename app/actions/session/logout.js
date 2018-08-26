// 'use strict'

export default function requestLogout() {

	return function( dispatch ) {

		dispatch( { type: 'SESSION::REQUESTING_LOGOUT' } )

	}

}