// 'use strict'

import _initialState from '../initialstate/points'

export default function reducer( state = _initialState , action ) {

	switch ( action.type ) {

		case 'POINTS::REQUESTING_MOVEMENTS':
			return {
				...state,
				loading: true
			}

			break

		case 'POINTS::REQUESTED_MOVEMENTS_SUCCEEDED':
			return {
				...state,
				movements: action.payload,
				loading: false,
				error: null
			}

			break

		case 'POINTS::REQUESTED_MOVEMENTS_REJECTED':
			return {
				...state,
				error: action.payload,
				loading: false
			}

			break

		case 'POINTS::CLEAR_MOVEMENTS':
			return {
				...state,
				loading: false,
				movements: new Array
			}

			break

	}

	return state

}