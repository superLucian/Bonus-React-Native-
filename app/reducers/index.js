// 'use strict'

import { combineReducers } from 'redux'

import cards from './cardsReducer'
import coupons from './couponsReducer'
import points from './pointsReducer'
import products from './productsReducer'
import session from './sessionReducer'
import shopping from './shoppingReducer'

export default combineReducers({
	cards,
	coupons,
	points,
	products,
	session,
	shopping,
})