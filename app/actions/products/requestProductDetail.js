// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

var DOMParser = require('xmldom').DOMParser

export default function requestProductList( params = { productId: '' } ) {

	return function(dispatch){

		dispatch({ type: 'PRODUCTS::REQUESTING_PRODUCTDETAIL' })

		const requestSettings = { 
			...axiosBaseConfig,
			data: globalConfig.productDetailFormat( params.productId ),
			url: globalConfig.productDetailEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent.trim();
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent.trim();

			let product = {
				id: params.productId,
				name: doc.getElementsByTagName( 'Desprobon' )[0].textContent.trim(),
				description: doc.getElementsByTagName( 'Despro' )[0].textContent.trim(),
				errorMsg: responseMessage,
				errorCode: errorCode,
				points: Math.floor( doc.getElementsByTagName( 'CnfPagAdi' )[0].textContent.replace(/ /g,'') ),
				plusValue: Math.floor( doc.getElementsByTagName( 'CnfNroPto' )[0].textContent.replace(/ /g,'') ),
				points2: Math.floor( doc.getElementsByTagName( 'CnfPagAdi' )[1].textContent.replace(/ /g,'') ),
				plusValue2: Math.floor( doc.getElementsByTagName( 'CnfNroPto' )[1].textContent.replace(/ /g,'') ),
			};

			if ( errorCode == '0' || errorCode == '5' )
				dispatch({ type: 'PRODUCTS::REQUESTED_PRODUCTDETAIL_SUCCEEDED' , payload: product })
			else
				dispatch({ type: 'PRODUCTS::REQUESTED_PRODUCTDETAIL_REJECTED' , payload: responseMessage })

		})

		.catch((err) => {
			dispatch({ type: 'PRODUCTS::REQUESTED_PRODUCTDETAIL_REJECTED' , payload: err })
		})

	}

}