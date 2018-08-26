// 'use strict'

import _initialState from '../initialstate/session'

export default function reducer( state = _initialState , action ) {

	switch ( action.type ) {

		// User is logged in
		case 'SESSION::LOGGED_IN':
			return {
				...state,
				loggedIn: true,
				loading: false
			}

			break

		// User is logged out
		case 'SESSION::LOGGED_OUT':
			return {
				...state,
				loggedIn: false,
				loading: false
			}

			break

		// User is in unknown loggin state
		case 'SESSION::LOGGED_IN_STATE_UNKOWN':
			return state

			break

		// User requests logout
		case 'SESSION::REQUESTING_LOGOUT':
			return {
				...state,
				loggedIn: false,
				loading: false,
				user: {}
			}

			break

		// Requested login in process
		case 'SESSION::REQUESTING_LOGIN':
			return {
				...state,
				loading: true
			}

			break

		// User login request succeeded
		case 'SESSION::REQUESTED_LOGIN_SUCCEEDED':
			return {
				...state,
				user: {
					...state.user,
					id: action.payload
				},
				loading: false,
				error: null
			}

			break

		// User login request failed
		case 'SESSION::REQUESTED_LOGIN_REJECTED':
			return {
				...state,
				error: action.payload,
				loading: false
			}

			break

		case 'SESSION::REQUESTING_USER_INFO':
			return {
				...state,
				loading: true
			}

			break

		// User user info request succeeded
		case 'SESSION::REQUESTED_USER_INFO_SUCCEEDED':
			return {
				...state,
				user: {
					...state.user,
					...action.payload
				},
				loading: false
			}

			break

		// User user info request failed
		case 'SESSION::REQUESTED_USER_INFO_REJECTED':
		return {
			...state,
			error: action.payload,
			loading: false
		}

			break

		// Register user info succeeded
		case 'SESSION::VALIDATING_REGISTER_SUCCEEDED':
			return {
				...state,
				registerUserInfo: {
					...state.registerUserInfo,
					...action.payload
				},
				loading: false
			}

			break

	}

	return state

}