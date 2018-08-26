// 'use strict'

export default function removeFromCart( index ) {

	return function( dispatch ) {

		dispatch({ 
			type: 'SHOPPING::REMOVE_FROM_CART' , 
			payload: index
		})

	}

}