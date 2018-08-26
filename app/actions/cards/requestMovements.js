// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

var DOMParser = require('xmldom').DOMParser

export default function requestLogin( credentials = { cardNumber: '' } ) {

	return function(dispatch){

		dispatch({ type: 'CARDS::REQUESTING_MOVEMENTS' })

		const requestSettings = {
			...axiosBaseConfig,
			data: globalConfig.movementsRequestFormat( credentials.cardNumber ),
			url: globalConfig.movementsRequestEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let numerOfMovements = doc.getElementsByTagName('Nrotrn')[0].textContent;
			let movementsNodes = doc.getElementsByTagName('Ultmovsol.UltmovsolItem');
			let movements = [];

			for ( var i = 0; i < movementsNodes.length; ++i ) {

				movements.push({
					description: movementsNodes[ i ].getElementsByTagName( 'DesTxn' )[0].textContent.trim(),
					date: movementsNodes[ i ].getElementsByTagName( 'FechaTxn' )[0].textContent.replace(/ /g,''),
					amount: movementsNodes[ i ].getElementsByTagName( 'MontoTxn' )[0].textContent.trim(),
					amountOrigin: movementsNodes[ i ].getElementsByTagName( 'MonOriTxn' )[0].textContent.trim(),
					cardType: movementsNodes[ i ].getElementsByTagName( 'TipTarje' )[0].textContent.replace(/ /g,''),
					wtf: movementsNodes[ i ].getElementsByTagName( 'SigMonTxn' )[0].textContent.replace(/ /g,''),
				});

			}

			if ( responseMessage == 'Exito' || errorCode == '0'  )
				dispatch({ type: 'CARDS::REQUESTED_MOVEMENTS_SUCCEEDED' , payload: movements })
			else
				dispatch({ type: 'CARDS::REQUESTED_MOVEMENTS_REJECTED' , payload: responseMessage })

		})

		.catch((err) => {
			dispatch({ type: 'CARDS::REQUESTED_MOVEMENTS_REJECTED' , payload: err })
		})

	}

}