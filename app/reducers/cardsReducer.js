// 'use strict'

import _initialState from '../initialstate/cards'

export default function reducer( state = _initialState , action ) {

	switch ( action.type ) {

		case 'CARDS::REQUESTING_USERCARDS':
			return {
				...state,
				loading: true
			}

			break

		case 'CARDS::REQUESTED_USERCARDS_SUCCEEDED':
			return {
				...state,
				cards: action.payload,
				loading: false,
				error: null
			}

			break

		case 'CARDS::REQUESTED_USERCARDS_REJECTED':
			return {
				...state,
				error: action.payload,
				loading: false
			}

			break

		case 'CARDS::CLEAR_USERCARDS':
			return {
				...state,
				loading: false,
				cards: new Array
			}

			break

		case 'CARDS::REQUESTING_MOVEMENTS':
			return {
				...state,
				loading: true
			}

			break

		case 'CARDS::REQUESTED_MOVEMENTS_SUCCEEDED':
			return {
				...state,
				movements: action.payload,
				loading: false,
				error: null
			}

			break

		case 'CARDS::REQUESTED_MOVEMENTS_REJECTED':
			return {
				...state,
				error: action.payload,
				loading: false
			}

			break

		case 'CARDS::CLEAR_MOVEMENTS':
			return {
				...state,
				loading: false,
				movements: new Array
			}

			break

	}

	return state

}