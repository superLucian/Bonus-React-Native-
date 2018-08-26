// 'use strict'

import _initialState from '../initialstate/shopping'

export default function reducer( state = _initialState , action ) {
	
	switch ( action.type ) {

		case 'SHOPPING::ADD_TO_CART':

			var cart = state.cart.map( ( item ) => item );

			cart.push( action.payload );

			return {
				...state, 
				cart
			}

			break

		case 'SHOPPING::REMOVE_FROM_CART':

			var cart = state.cart.map( ( item ) => item );

			cart.splice( action.payload , 1 );

			return {
				...state, 
				cart
			}

			break

	}

	return state

} 