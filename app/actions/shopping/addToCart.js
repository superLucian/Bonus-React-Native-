// 'use strict'

export default function addToCart( newItem = null ) {

	if( !newItem )
		return;

	return function( dispatch ) {

		dispatch({ 
			type: 'SHOPPING::ADD_TO_CART' , 
			payload: newItem 
		})

	}

}