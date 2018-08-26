// 'use strict'

import axios from 'axios'

import axiosBaseConfig from '../../config/axiosBaseConfig'
import globalConfig from '../../config/globalConfig'

var DOMParser = require('xmldom').DOMParser

export default function requestLogin( credentials = { userId: '' } ) {

	return function(dispatch){

		dispatch({ type: 'CARDS::REQUESTING_USERCARDS' })

		const requestSettings = {
			...axiosBaseConfig,
			data: globalConfig.cardsRequestUserCardsFormat( credentials.userId ),
			url: globalConfig.cardsRequestUserCardsEndpoint,
		}

		axios( requestSettings )

		.then((response) => {

			let doc = new DOMParser().parseFromString( response.data , 'text/xml' );
			let responseMessage = doc.getElementsByTagName('Msjerror')[0].textContent;
			let errorCode = doc.getElementsByTagName('Coderror')[0].textContent;
			let cardNodes = doc.getElementsByTagName('Listrjfin.ListrjfinItem');
			let cards = [];

			for ( var i = 0; i < cardNodes.length; ++i ) {

				cards.push({
					cardName: cardNodes[ i ].getElementsByTagName( 'TitTar' )[0].textContent.trim(),
					cardNumber: cardNodes[ i ].getElementsByTagName( 'TarCod' )[0].textContent.replace(/ /g,''),
					primary: cardNodes[ i ].getElementsByTagName( 'TarTipTar' )[0].textContent.trim(),
					cardAlias: cardNodes[ i ].getElementsByTagName( 'TarAlias' )[0].textContent.trim(),
					creditCardNumber: cardNodes[ i ].getElementsByTagName( 'TarFin' )[0].textContent.replace(/ /g,''),
					cardBalance: cardNodes[ i ].getElementsByTagName( 'TarSdo' )[0].textContent.replace(/ /g,''),
				});

			}

			cards.reverse();

			if ( responseMessage == 'Exito' || errorCode == '0'  )
				dispatch({ type: 'CARDS::REQUESTED_USERCARDS_SUCCEEDED' , payload: cards })
			else
				dispatch({ type: 'CARDS::REQUESTED_USERCARDS_REJECTED' , payload: responseMessage })

		})

		.catch((err) => {
			dispatch({ type: 'CARDS::REQUESTED_USERCARDS_REJECTED' , payload: err })
		})

	}

}