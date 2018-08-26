// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

var DOMParser = require('xmldom').DOMParser

export default function requestLogin( credentials = { userId: '' } ) {

	return function(dispatch){

		dispatch({ type: 'POINTS::REQUESTING_MOVEMENTS' })

		const requestSettings = {
			...axiosBaseConfig,
			data: globalConfig.pointsMovementsRequestFormat( credentials.userId ),
			url: globalConfig.pointsMovementsRequestEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let numerOfMovements = doc.getElementsByTagName('Nrotrn')[0].textContent;
			let movementsNodes = doc.getElementsByTagName('Ultmovpt.UltmovptItem');
			let movements = [];

			for ( var i = 0; i < movementsNodes.length; ++i ) {

				movements.push({
					description: movementsNodes[ i ].getElementsByTagName( 'Descrip' )[0].textContent.trim(),
					dateTime: movementsNodes[ i ].getElementsByTagName( 'FchHor' )[0].textContent.replace(/ /g,''),
					amount: movementsNodes[ i ].getElementsByTagName( 'PtosBon' )[0].textContent.trim(),
					dateMade: movementsNodes[ i ].getElementsByTagName( 'FchProc' )[0].textContent.trim(),
					timeMade: movementsNodes[ i ].getElementsByTagName( 'HorProc' )[0].textContent.replace(/ /g,''),
					dateTransfered: movementsNodes[ i ].getElementsByTagName( 'FchAsig' )[0].textContent.replace(/ /g,''),
				});

			}

			if ( responseMessage == 'Exito' || errorCode == '0'  )
				dispatch({ type: 'POINTS::REQUESTED_MOVEMENTS_SUCCEEDED' , payload: movements })
			else
				dispatch({ type: 'POINTS::REQUESTED_MOVEMENTS_REJECTED' , payload: responseMessage })

		})

		.catch((err) => {
			dispatch({ type: 'POINTS::REQUESTED_MOVEMENTS_REJECTED' , payload: err })
		})

	}

}