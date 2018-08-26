// 'use strict'

export default function updateLoggedInState( loggedInState = 'unknown' ) {

	switch ( loggedInState ) {

		case 'loggedIn':
			return function( dispatch ) {
				dispatch( { type: 'SESSION::LOGGED_IN' } )
			}

			break

		case 'loggedOut':
			return function( dispatch ) {
				dispatch( { type: 'SESSION::LOGGED_OUT' } )
			}

			break

		default:
			return function( dispatch ) {
				dispatch( { type: 'SESSION::LOGGED_IN_STATE_UNKOWN' } )
			}

			break

	}

}