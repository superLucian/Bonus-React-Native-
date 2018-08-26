// 'use strict'

import logout from './session/logout'
import requestLogin from './session/requestLogin'
import requestUserInfo from './session/requestUserInfo'
import updateLoggedInState from './session/updateLoggedInState'
import validateRegisterInfo from './session/validateRegisterInfo'

export default {
	logout,
	requestLogin,
	requestUserInfo,
	updateLoggedInState,
	validateRegisterInfo
}