// 'use strict'

import React from 'react';
import {
	Dimensions,
	Modal,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { Button } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Product extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			modalVisible: false,
			points: null,
			value: null,
			radioSelected: 1,
			init: false
		}
	}

	componentDidMount(){
		this.props.dispatch( this.props.productsActions.requestProductDetail( { productId: this.props.product.id } ) );
	}

	componentWillReceiveProps( nextProps ){
		if( !this.state.init && nextProps.products.productDetail !== null ){
			if( nextProps.products.productDetail.value !== null && nextProps.products.productDetail.points !== null ){
				this.setState({
					points: nextProps.products.productDetail.points,
					value: nextProps.products.productDetail.plusValue,
					init: true
				});
			}
		}
	}

	render(){
		return <Modal
			animationType={'slide'}
			transparent={true}
			visible={this.state.modalVisible}
			onRequestClose={() => null}
			supportedOrientations={['portrait']}
			>
			<View style={[styles.container, styles.modalBackgroundStyle]}>
				<View style={[styles.innerContainer, styles.innerContainerTransparentStyle]}>
				<Text>Su producto se agregó con éxito al carrito.</Text>
				<Button
					onPress={ () => {

						this.setState({ modalVisible: false })

						this.props.navigator.push({
							name: "CouponConfirm",
							sceneConfig: Navigator.SceneConfigs.FloatFromRight
						});

					}}
					style={styles.modalButton}
					title={"Aceptar"}>
					Aceptar
				</Button>
				<Button
					onPress={ () => this.setState({ modalVisible: false }) }
					style={styles.modalButton}
					title={"Cerrar"}>
					Cerrar
				</Button>
				</View>
			</View>
		</Modal>;
	}
}

let styles = StyleSheet.create({
	caret:{
		position: 'absolute',
		right: 14,
		top: 14,
		width:10,
		height:10,
		resizeMode: 'contain'
	},
	header:{

		flex:4,
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'center'

	},
	main:{
		flex:21,
		flexDirection:'column',
		backgroundColor:'white',
		alignItems:'center',
		justifyContent:'flex-start',
		padding:20,
		alignSelf: 'stretch'
	},
	logo:{
		resizeMode: 'contain',
		alignSelf:'center',
	},
	body:{
		fontSize: 13,
		color: 'rgba(0,0,0,.3)',
		textAlign:'center',
		justifyContent:'center',
		paddingTop: 10,
		fontFamily: 'Varela Round'
	},
	balance:{
		fontSize: 56,
		color: '#194B7C',
		alignSelf:'center',
		paddingTop:30,
		fontFamily: 'Oswald',
		fontStyle: 'italic',
		fontWeight: '300'

	},
	button:{
		flex: 3,
		backgroundColor: 'rgb(32,76,165)',
		borderRadius: 20,
		shadowColor: 'transparent',
		width: Dimensions.get('window').width*0.8,
		marginTop: 20,
	},
	button2:{
		flex: 1,
		backgroundColor: '#FFF',
		borderWidth: 2,
		borderColor: 'rgba(0,0,255,.3)',
		borderRadius: 20,
		shadowColor: 'transparent',
		alignSelf:'stretch',
		marginTop: 20,
		maxHeight: 60,
		maxWidth: 364,
		marginLeft: 8
	}
});
