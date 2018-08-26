// 'use strict'

import _initialState from '../initialstate/products'

export default function reducer( state = _initialState , action ) {

	switch ( action.type ) {

		case 'PRODUCTS::REQUESTING_PRODUCTDETAIL':
			return {
				...state,
				loading: true
			}

			break

		case 'PRODUCTS::REQUESTED_PRODUCTDETAIL_SUCCEEDED':
			return {
				...state,
				productDetail: action.payload,
				loading: false,
				error: null
			}

			break

		case 'PRODUCTS::REQUESTED_PRODUCTDETAIL_REJECTED':
			return {
				...state,
				productDetail: null,
				error: action.payload,
				loading: false
			}

			break

		case 'PRODUCTS::REQUESTING_PRODUCTLIST':
			return {
				...state,
				loading: true
			}

			break

		case 'PRODUCTS::REQUESTED_PRODUCTLIST_SUCCEEDED':
			return {
				...state,
				products: action.payload,
				loading: false,
				error: null
			}

			break

		case 'PRODUCTS::REQUESTED_PRODUCTLIST_REJECTED':
			return {
				...state,
				error: action.payload,
				loading: false
			}

			break


		case 'PRODUCTS::CLEAR_PRODUCTLIST':
			return {
				...state,
				loading: false,
				products: new Array
			}

			break

	}

	return state

}