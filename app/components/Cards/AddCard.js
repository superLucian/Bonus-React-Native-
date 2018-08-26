// 'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	Navigator,
	View,
	ScrollView
} from 'react-native';

import { CheckBox, Container, Content, InputGroup, Input, Icon, Text, Picker } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import Header   from '../Partials/Header';
import Button   from '../Partials/Button';

export default class AddCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'',
			number:'',
			year:'',
			month:'',
			cvv:''
		}
	}

	render(){
		return <Container>
			<Content>
				<Grid>
					<Row style={{height:90}}>
						<Header {...this.props} titleView="MIS TARJETAS"/>
					</Row>
					<Row style={styles.container}>

						<ScrollView
	        		    style={{height:120}}
	        		    contentContainerStyle={styles.imgContainer}
	        		    horizontal
	        		    >
	                        <Image source={require('../../img/cards/Visa.png')} style={styles.img}/>
	                        <Image source={require('../../img/cards/Masterdcard.png')} style={styles.img}/>
	                        <Image source={require('../../img/cards/Visa.png')} style={styles.img}/>

	                    </ScrollView>
	                    <Button invert text="Escanear Tarjeta"/>
	                    <Text style={{padding:15}}> ó </Text>
	                    <InputGroup style={styles.inputGroup} borderType={'regular'}>
							<Input
								onChangeText={( name ) => this.setState({ name })}
								style={styles.textInput}
								placeholder="Nombre Completo"
								placeholderTextColor="gray"
								value={this.state.name}
							/>
						</InputGroup>
						<InputGroup style={styles.inputGroup} borderType={'regular'}>
							<Input
								onChangeText={( number ) => this.setState({ number })}
								style={styles.textInput}
								placeholder="Número de Tarjeta"
								placeholderTextColor="gray"
								value={this.state.number}

							/>
						</InputGroup>
						<Row style={{alignSelf:'stretch',justifyContent:'space-between',alignItems:'center'}}>
							<View style={styles.inputContainer}>
									<Picker
											iosHeader="Mes"
											prompt="Mes"
											mode="dialog"
											selectedValue={ this.state.month }
											onValueChange={ ( month ) => this.setState({ month }) }
											style={styles.picker}
											textStyle={{ marginLeft: 20 , color: 'gray' , fontSize: 11}}
										>
										<Picker.Item key={0} label="MM" value="MM" />
										<Picker.Item key={1} label="01" value="01" />
										<Picker.Item key={2} label="02" value="02" />
										<Picker.Item key={3} label="03" value="03" />
										<Picker.Item key={4} label="04" value="04" />
										<Picker.Item key={5} label="05" value="05" />
										<Picker.Item key={6} label="06" value="06" />
										<Picker.Item key={7} label="07" value="07" />
										<Picker.Item key={8} label="08" value="08" />
										<Picker.Item key={9} label="09" value="09" />
										<Picker.Item key={10} label="10" value="10" />
										<Picker.Item key={11} label="11" value="11" />
										<Picker.Item key={12} label="12" value="12" />

									</Picker>
							</View>

							<View style={styles.inputContainer}>
									<Picker
											iosHeader="Año"
											prompt="Año"
											mode="dialog"
											selectedValue={ this.state.year }
											onValueChange={ ( year ) => this.setState({ year }) }
											style={styles.picker}
											textStyle={{ marginLeft: 20 , color: '#FFF' , fontSize: 11}}

										>
										<Picker.Item key={0} label="YYYY" value="YYYY" />
										<Picker.Item key={1} label="2017" value="2017" />
										<Picker.Item key={2} label="2018" value="2018" />
										<Picker.Item key={3} label="2019" value="2019" />
										<Picker.Item key={4} label="2020" value="2020" />
										<Picker.Item key={5} label="2021" value="2021" />
										<Picker.Item key={6} label="2022" value="2022" />
										<Picker.Item key={7} label="2023" value="2023" />

									</Picker>
								</View>

								<InputGroup style={styles.inputGroup}>
									<Input
										onChangeText={( cvv ) => this.setState({ cvv })}
										style={styles.textInput}
										placeholder="CVV"
										placeholderTextColor="grey"
										value={this.state.cvv}

									/>
								</InputGroup>


						</Row>
						<Row style={{alignSelf:'flex-start'}}>
							<CheckBox style={styles.checkBox} checked={ true }/>
							<Text style={{fontSize:11,color:'gray',fontFamily:'Varela Round',paddingLeft:10}}>Utilizar como tarjeta principal</Text>
						</Row>
						<Button text="Verificar"/>

					</Row>
				</Grid>
			</Content>
		</Container>;
	}
}

let styles = StyleSheet.create({

	inputContainer:{

		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row' ,
		alignSelf: 'flex-start' ,
		borderWidth: 1 ,
		borderColor: 'rgba(255,255,255,.15)',
		borderRadius: 6,
		marginBottom: 10

	},
	picker:{
		padding: 0 ,
		margin: 0 ,
		flex: 1 ,
		alignSelf: 'stretch' ,
		justifyContent: 'center',
		alignItems: 'center',
		left: 0
	},
    container:{
	    backgroundColor:'white',
	    flex:1,
	    flexDirection:'column',
	    justifyContent:'center',
	    alignItems:'center',
	    padding:20,
	    alignSelf:'stretch'

    },
    imgContainer:{
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'center'
    },
	caret:{
		position: 'absolute',
		right: 14,
		top: 14,
		width:10,
		height:10,
		resizeMode: 'contain'
	},
	checkBox: {
		marginTop:10,
		paddingLeft:2,
		paddingRight:2,
		paddingTop:1,
		paddingBottom:1,
		height: 15,
		borderColor: 'gray',
		borderWidth: 1,
		backgroundColor: 'transparent',borderRadius: 3
	},
	inputGroup: {
		flex:1,
		borderColor: 'gray',
		borderRadius: 6,
		marginBottom: 14,
		alignItems:'center'
	},
	textInput: {
		lineHeight:15,
		fontSize: 11,
		fontFamily: 'Varela Round',
		color:'rgb(32,76,165)',
	},
	img:{
        resizeMode:'contain',
        width:150
    },
});
