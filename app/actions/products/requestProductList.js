// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

var DOMParser = require('xmldom').DOMParser

export default function requestProductList( params = { categoryId: '' } ) {

	return function(dispatch){

		dispatch({ type: 'PRODUCTS::REQUESTING_PRODUCTLIST' })

		const requestSettings = { 
			...axiosBaseConfig,
			data: globalConfig.productsRequestFormat( params.categoryId ),
			url: globalConfig.productsRequestEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let productNodes = doc.getElementsByTagName('Lisprdcj.LisprdcjItem');
			let products = [];


			for ( var i = 0; i < productNodes.length; ++i ) {

				products.push({
					code: productNodes[ i ].getElementsByTagName( 'CmsCodPro' )[0].textContent.replace(/ /g,''),
					name: productNodes[ i ].getElementsByTagName( 'CmsDesPro' )[0].textContent.trim(),
					points: productNodes[ i ].getElementsByTagName( 'CnfPagAdi' )[0].textContent.replace(/ /g,''),
					plusValue: productNodes[ i ].getElementsByTagName( 'CnfNroPto' )[0].textContent.replace(/ /g,''),
					points2: productNodes[ i ].getElementsByTagName( 'CnfPagAdi' )[1].textContent.replace(/ /g,''),
					plusValue2: productNodes[ i ].getElementsByTagName( 'CnfNroPto' )[1].textContent.replace(/ /g,''),
				});

			}

			if ( responseMessage == 'Exito' && errorCode == '0'  )
				dispatch({ type: 'PRODUCTS::REQUESTED_PRODUCTLIST_SUCCEEDED' , payload: products })
			else
				dispatch({ type: 'PRODUCTS::REQUESTED_PRODUCTLIST_REJECTED' , payload: responseMessage })

		})

		.catch((err) => {
			dispatch({ type: 'PRODUCTS::REQUESTED_PRODUCTLIST_REJECTED' , payload: err })
		})

	}

}