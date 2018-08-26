// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

var DOMParser = require('xmldom').DOMParser

export default function requestProductList( params = { userId: '' } ) {

	return function(dispatch){

		dispatch({ type: 'COUPONS::REQUESTING_BONUSCOUPONS' })

		const requestSettings = { 
			...axiosBaseConfig,
			data: globalConfig.couponRequestBonusCouponFormat( params.userId ),
			url: globalConfig.couponRequestBonusCouponEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let couponsNodes = doc.getElementsByTagName('Carritomec');
			let coupons = [];


			for ( var i = 0; i < couponsNodes.length; ++i ) {

				coupons.push({
					code: couponsNodes[ i ].getElementsByTagName( 'MpsCod' )[0].textContent.replace(/ /g,''),
					name: couponsNodes[ i ].getElementsByTagName( 'MpsCnf' )[0].textContent.trim(),
					points: couponsNodes[ i ].getElementsByTagName( 'MpsPtos' )[0].textContent.replace(/ /g,''),
					value: couponsNodes[ i ].getElementsByTagName( 'MpsSol' )[0].textContent.replace(/ /g,''),
					rawRequest: response.data
				});

			}

			if ( responseMessage == 'Exito' && errorCode == '0'  )
				dispatch({ type: 'COUPONS::REQUESTED_BONUSCOUPONS_SUCCEEDED' , payload: coupons })
			else
				dispatch({ type: 'COUPONS::REQUESTED_BONUSCOUPONS_REJECTED' , payload: responseMessage })

		})

		.catch((err) => {
			dispatch({ type: 'COUPONS::REQUESTED_BONUSCOUPONS_REJECTED' , payload: err })
		})

	}

}