// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

import toTitleCase from '../../utils/toTitleCase'

var DOMParser = require('xmldom').DOMParser

export default function requestUserInfo( credentials = { userId: '' } ) {

	return function(dispatch){

		dispatch({ type: 'SESSION::REQUESTING_USER_INFO' })

		const requestSettings = {
			...axiosBaseConfig,
			data: globalConfig.userInfoRequestFormat( credentials.userId ),
			url: globalConfig.userInfoRequestEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let returnedUserId = doc.getElementsByTagName('Prsnrodoc')[0].textContent;

			let user = {}
			user.name = toTitleCase( doc.getElementsByTagName('Prsnomape')[0].textContent );
			user.uniqId = returnedUserId;

			user.accountType = doc.getElementsByTagName('PCtaTip')[0].textContent.replace(/ /g,'');
			user.accountTypeName = doc.getElementsByTagName('PCtaTipNom')[0].textContent.replace(/ /g,'');

			user.accountAutCnj = doc.getElementsByTagName('PCtaAutCnj')[0].textContent.replace(/ /g,'');

			user.accountableBalance = doc.getElementsByTagName('CtaSalCon')[0].textContent.replace(/ /g,'');
			user.availableBalance = doc.getElementsByTagName('CtaSalDsp')[0].textContent.replace(/ /g,'');
			user.currentBalance = Math.floor( doc.getElementsByTagName('CtaSalVig')[0].textContent.replace(/ /g,'') );

			user.pointsCode = doc.getElementsByTagName('TipPunCod')[0].textContent.replace(/ /g,'');

			if ( responseMessage == 'Exito' && errorCode == '0'  )
				dispatch({ type: 'SESSION::REQUESTED_USER_INFO_SUCCEEDED' , payload: user })
			else
				dispatch({ type: 'SESSION::REQUESTED_USER_INFO_REJECTED' , payload: responseMessage })

		})

		.catch((err) => {
			dispatch({ type: 'SESSION::REQUESTED_USER_INFO_REJECTED' , payload: err })
		})

	}

}