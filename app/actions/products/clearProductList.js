// 'use strict'

export default function clearProductList() {

	return function(dispatch){

		dispatch({ type: 'PRODUCTS::CLEAR_PRODUCTLIST' })

	}

}