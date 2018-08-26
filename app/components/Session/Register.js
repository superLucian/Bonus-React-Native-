// 'use strict'

import React, { Component } from 'react';
import {
	Image,
	Navigator,
	StyleSheet,
	// Text,
	View
} from 'react-native';

import { CheckBox , Container, Content, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import StatusBarBackground from '../Partials/StatusBarBackground';
import BackIcon from './Partials/BackIcon';

import theme from '../../themes/bonus';

import RadiusButton from '../Utility/RadiusButton';

export default class Register extends Component
{

	constructor( props ){
		super( props );
		this.state = {
			loggedIn: false,
			idType: '01',
			userId: null,
			phoneNumber: null,
			password: null,
			passwordConfimation: null,
		};
	}

	render(){

		if ( this.state.loggedIn )
			return null;

		return (

			<Grid>
				<StatusBarBackground />
				<BackIcon index={ -1 } changeScreen={this.props.changeScreen} />
				<Row size={3} style={styles.row}>
					<View style={styles.logoContainer} >
						<Image style={styles.logo} source={require('../../img/bonus-logoBlanco300.png')} />
					</View>
				</Row>
				<Row size={12} style={styles.row}>
					<Container style={[styles.formContainer,{paddingTop: 6}]} theme={theme}>
						<Content style={ {paddingRight: 30, paddingLeft: 30} }>
							<View style={{marginBottom: 10}}>
								<Text style={{textAlign: 'center', color: 'rgba(255,255,255,.9)', fontSize: 18}}>Crear Cuenta</Text>
							</View>
							<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' , alignSelf: 'stretch' ,borderWidth: 1 , borderColor: 'rgba(255,255,255,.15)', borderRadius: 6, marginBottom: 10, }}>
								<Image style={ styles.caret } source={ require( '../../img/arrow-select.png' ) }/>
								<Picker
									iosHeader="Tipo de Documento"
									prompt="Tipo de Documento"
									mode="dialog"
									selectedValue={ this.state.idType }
									onValueChange={ ( idType ) => this.setState({ idType }) }
									style={{ padding: 0 , margin: 0 , flex: 1 , alignSelf: 'stretch' , justifyContent: 'flex-start', alignItems: 'center', left: 0 }}
									textStyle={{ marginLeft: 0 , color: '#FFF' , fontSize: 11}}
									enabled={ !this.props.session.loading }
								>
										<Picker.Item key={0} label="D.N.I." value="01" />
										<Picker.Item key={1} label="C.I." value="02" />
										<Picker.Item key={2} label="C.E." value="03" />
										<Picker.Item key={3} label="PASAPORTE" value="04" />
								</Picker>
							</View>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="Ej: 41231649" onChangeText={( userId ) => {
									this.setState({ userId })
									this.props.dispatch( this.props.sessionActions.validateRegisterInfo({
										idType:  userId,
										userId:  textValue
									}));
								}}/>
							</InputGroup>
							<InputGroup style={[ styles.inputGroup  , { backgroundColor: 'rgba(255,255,255,.1)' } ]} borderType={'regular'} disabled>
								<Input style={styles.textInput } placeholder="Nombre Completo" disabled value={ this.props.session.registerUserInfo.name }/>
							</InputGroup>
							<InputGroup style={[ styles.inputGroup  , { backgroundColor: 'rgba(255,255,255,.1)' } ]} borderType={'regular'} disabled>
								<Input style={styles.textInput} placeholder="Email" disabled value={ this.props.session.registerUserInfo.email }/>
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="Teléfono" onChangeText={( phoneNumber ) => this.setState({ phoneNumber })} />
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'} secureTextEntry >
								<Input style={styles.textInput} placeholder="Contraseña" onChangeText={( password ) => this.setState({ password })} />
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="Repetir Contraseña" onChangeText={( passwordConfimation ) => this.setState({ passwordConfimation })} />
							</InputGroup>
							<Grid>
								<Col style={{ paddingTop: 28 }}>
									<RadiusButton onPress={(event) => {

											this.props.dispatch( this.props.sessionActions.requestRegister({
												userId: 80653260,
												password: 'p3rs301!',
												idType: '01'
											}));

										}}
										text="Registrar mi cuenta"
									/>
								</Col>
							</Grid>
							<View style={{alignSelf: 'center', padding: 30, paddingTop: 32}}>
								<Text style={{color: 'rgba(255,255,255,.5)', fontSize: 9, textAlign: 'center', lineHeight: 12}}>{"Al presionar << Registrar mi cuenta >> acepta nuestros"}<Text style={{fontSize: 9,color:'#FFF', lineHeight: 12}}> Terminos y Servicios</Text></Text>
							</View>
				    	</Content>
				    </Container>
			    </Row>
			</Grid>

		);

	}
}

let styles = StyleSheet.create({
	formContainer: {
		// backgroundColor: 'green',
		marginTop: 0,
		// marginRight: 40,
		marginBottom: 0,
		// marginLeft: 40,
		paddingTop: 32,
		paddingRight: 18,
		paddingBottom: 32,
		paddingLeft: 18,
	},
	inputGroup: {
		borderColor: 'rgba(255,255,255,.15)',
		borderRadius: 6,
		marginBottom: 8,
	},
	textInput: {
		fontSize: 11
	},
	caret:{
		position: 'absolute',
		right: 14,
		top: 14,
		width:10,
		height:10,
		resizeMode: 'contain'
	},
	logo: {
		resizeMode: 'contain',
		height: 58/1.7, // 58
		width: 300/1.7, // 300
		// alignSelf: 'center',
		top: 4
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'center',
		paddingLeft: 100,
		paddingRight: 100,
	},
	row: {

	},
});