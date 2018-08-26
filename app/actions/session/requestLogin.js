// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

var DOMParser = require('xmldom').DOMParser

export default function requestLogin( credentials = { userId: '' , password: '' , idType: '' } ) {

	return function(dispatch){

		dispatch({ type: 'SESSION::REQUESTING_LOGIN' })

		const requestSettings = {
			...axiosBaseConfig,
			data: globalConfig.loginRequestFormat( credentials.userId , credentials.password , credentials.idType ),
			url: globalConfig.loginRequestEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let userId = doc.getElementsByTagName('Prscod')[0].textContent;

			if ( responseMessage == 'Exito' && errorCode == '0'  )
				dispatch({ type: 'SESSION::REQUESTED_LOGIN_SUCCEEDED' , payload: userId })
			else
				dispatch({ type: 'SESSION::REQUESTED_LOGIN_REJECTED' , payload: responseMessage })

		})

		.catch((err) => {
			dispatch({ type: 'SESSION::REQUESTED_LOGIN_REJECTED' , payload: err })
		})

	}

}