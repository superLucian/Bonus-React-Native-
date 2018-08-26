// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

import toTitleCase from '../../utils/toTitleCase'

var DOMParser = require('xmldom').DOMParser

export default function validateRegisterInfo( credentials = { userId: '' , idType: '' } ) {

	return function(dispatch){

		dispatch({ type: 'SESSION::VALIDATING_REGISTER_INFO' })

		console.log(globalConfig.registerValidateFormat( credentials.userId , credentials.idType ));

		const requestSettings = {
			...axiosBaseConfig,
			data: globalConfig.registerValidateFormat( credentials.userId , credentials.idType ),
			url: globalConfig.registerValidateEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let returnedUserId = doc.getElementsByTagName('Prscod')[0].textContent;

			let user = {}
			let firstName1 = doc.getElementsByTagName('Prsprinom')[0].textContent;
			let firstName2 = doc.getElementsByTagName('Prssegnom')[0].textContent;
			let lastName1 	= doc.getElementsByTagName('Prsapepat')[0].textContent;
			let lastName2 	= doc.getElementsByTagName('Prsapepat')[0].textContent;
			user.name = firstName1 + ' ' + firstName2 + lastName1 + ' ' + lastName2;
			user.email = doc.getElementsByTagName('Prsmai')[0].textContent;;
			user.uniqId = returnedUserId;

			if ( responseMessage == 'Exito' && errorCode == '0'  )
				dispatch({ type: 'SESSION::VALIDATING_REGISTER_SUCCEEDED' , payload: user })
			else
				dispatch({ type: 'SESSION::VALIDATING_REGISTER_REJECTED' , payload: responseMessage })

		})

		.catch((err) => {
			dispatch({ type: 'SESSION::VALIDATING_REGISTER_REJECTED' , payload: err })
		})

	}

}