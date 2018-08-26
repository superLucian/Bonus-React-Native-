// 'use strict'

export default {
	apiEntry: '/app-web/servlet',
	cardsRequestUserCardsEndpoint: '/awslisntrjf',
	cardsRequestUserCardsFormat: ( userId ) => (
		`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">
		   <soapenv:Header/>
		   <soapenv:Body>
		      <app:wslisntrjf.Execute>
		         <app:Prscod>${ userId }</app:Prscod>
		         <app:Usuario>bonusapp</app:Usuario>
		      </app:wslisntrjf.Execute>
		   </soapenv:Body>
		</soapenv:Envelope>`
	),
	couponRegisterEndpoint: '/awstrfptso?wsdl',
	couponRegisterFormat: ( couponId ) => (
		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		   +'<soapenv:Header/>'
		   +'<soapenv:Body>'
		      +'<app:wstrfptso.Execute>'
		         +'<app:Ctaprscod>0003465850</app:Ctaprscod>'
		         +'<app:Ctacod>1</app:Ctacod>'
		         +'<app:Usuario>APPBONUS</app:Usuario>'
		         +'<app:Mpscod>' + couponId + '</app:Mpscod>'
		         +'<app:Mpsesqcod>0</app:Mpsesqcod>'
		      +'</app:wstrfptso.Execute>'
		   +'</soapenv:Body>'
		+'</soapenv:Envelope>'
	),
	couponRequestBonusCouponEndpoint: '/awsmecatps',
	couponRequestBonusCouponFormat: ( userId ) => (
		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		   + '<soapenv:Header/>'
		   + '<soapenv:Body>'
		      + '<app:wsmecatps.Execute>'
		         + '<app:Mpstip>P</app:Mpstip>'
		         + '<app:Mpsprscod>' + userId + '</app:Mpsprscod>'
		         + '<app:Ctacod>1</app:Ctacod>'
		         + '<app:Mpsesqcod>?</app:Mpsesqcod>'
		      + '</app:wsmecatps.Execute>'
		   + '</soapenv:Body>'
		+ '</soapenv:Envelope>'
	),
	getImageUri: ( imageId ) => 'http://www.bonus.com.pe/images/productos/' + imageId + '.jpg',
	productDetailEndpoint: '/awsoprdcnj',
	productDetailFormat: ( productId ) => (
		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		+ '<soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '<app:wsoprdcnj.Execute>'
		+ '<app:Codprobon>' + productId + '</app:Codprobon>'
		+ '<app:Idptoalmf>1</app:Idptoalmf>'
		+ '</app:wsoprdcnj.Execute>'
		+ '</soapenv:Body>'
		+ '</soapenv:Envelope>'
	),
	pointsMovementsRequestEndpoint: '/awsultmovpt',
	pointsMovementsRequestFormat: ( userId ) => (
		`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">
		   <soapenv:Header/>
		   <soapenv:Body>
		      <app:wsultmovpt.Execute>
		         <app:Ctaprscod>${ userId }</app:Ctaprscod>
		         <app:Ctacod>1</app:Ctacod>
		      </app:wsultmovpt.Execute>
		   </soapenv:Body>
		</soapenv:Envelope>`
	),
	productsRequestEndpoint: '/awslisprdc',
	productsRequestFormat: ( categoryId ) => (
		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		+ '<soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '<app:wslisprdc.Execute>'
		+ '<app:Filtro>?</app:Filtro>'
		+ '<app:Cmscodcat>' + categoryId + '</app:Cmscodcat>'
		+ '<app:Prscod>?</app:Prscod>'
		+ '<app:Dpwdespro>?</app:Dpwdespro>'
		+ '</app:wslisprdc.Execute>'
		+ '</soapenv:Body>'
		+ '</soapenv:Envelope>'
	),
	loginRequestEndpoint: '/awslogusuap',
	loginRequestFormat: ( userId , password , idType ) => (

		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		+ '<soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '<app:wslogusuap.Execute>'
		+ '<app:Tipdoccod>' + idType + '</app:Tipdoccod>'
		+ '<app:Prsnrodoc>' + userId + '</app:Prsnrodoc>'
		+ '<app:Usucla>' + password + '</app:Usucla>'
		+ '</app:wslogusuap.Execute>'
		+ '</soapenv:Body>'
		+ '</soapenv:Envelope>'

	),
	movementsRequestEndpoint: '/awsultmovso',
	movementsRequestFormat: ( bonusCardNumber ) => (
		`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">
		   <soapenv:Header/>
		   <soapenv:Body>
		      <app:wsultmovso.Execute>
		         <app:Tarcod>${bonusCardNumber}</app:Tarcod>
		         <app:Usuario>bonusapp</app:Usuario>
		      </app:wsultmovso.Execute>
		   </soapenv:Body>
		</soapenv:Envelope>`
	),
	registerRequestEndpoint: '/awsregusuap',
	registerRequestFormat: ( userId , password , phoneNumber ) => (

		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		+ '<soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '<app:wsregusuap.Execute>'
		+ '<app:Prscod>' + userId + '</app:Prscod>'
		+ '<app:Prsusucla>' + password + '</app:Prsusucla>'
		+ '<app:Prsnrocel>' + phoneNumber + '</app:Prsnrocel>'
		+ '</app:wsregusuap.Execute>'
		+ '</soapenv:Body>'
		+ '</soapenv:Envelope>'

	),
	registerValidateEndpoint: '/awsodatclie',
	registerValidateFormat: ( userId , idType ) => (

		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		+ '<soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '<app:wsodatclie.Execute>'
		+ '<app:Tipdoccod>' + idType + '</app:Tipdoccod>'
		+ '<app:Prsnrodoc>' + userId + '</app:Prsnrodoc>'
		+ '</app:wsodatclie.Execute>'
		+ '</soapenv:Body>'
		+ '</soapenv:Envelope>'

	),
	userInfoRequestEndpoint: '/awslisctapt',
	userInfoRequestFormat: ( userId ) => (

		'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:app="AppBonus">'
		+ '<soapenv:Header/>'
		+ '<soapenv:Body>'
		+ '<app:wslogusuap.Execute>'
		+ '<app:Ctaprscod>'+ userId +'</app:Ctaprscod>'
		+ '</app:wslogusuap.Execute>'
		+ '</soapenv:Body>'
		+ '</soapenv:Envelope>'

	),
	WSServerAddress: 'http://200.62.147.188:8080',
}