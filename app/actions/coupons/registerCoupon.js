// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

var DOMParser = require('xmldom').DOMParser

export default function requestProductList( params = { couponId: '' } ) {

	return function(dispatch){

		dispatch({ type: 'COUPONS::REGISTERING_COUPON' })

		const requestSettings = { 
			...axiosBaseConfig,
			data: globalConfig.couponRegisterFormat( params.couponId ),
			url: globalConfig.couponRegisterEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;

			

			if ( responseMessage == 'Exito' && errorCode == '0'  )
				dispatch({ type: 'COUPONS::COUPON_REGISTRATION_SUCCEEDED' , payload: responseMessage });
			else
				dispatch({ type: 'COUPONS::COUPON_REGISTRATION_REJECTED' , payload: responseMessage });

		})

		.catch((err) => {
			dispatch({ type: 'COUPONS::COUPON_REGISTRATION_REJECTED' , payload: err })
		})

	}

}