// 'use strict'

import React from 'react';
import {
	Dimensions,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { Button, List, ListItem, Radio, Picker, Spinner } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

import globalConfig from '../../config/globalConfig';

import CartIcon from '../Partials/CartIcon';
import GoBack from '../Partials/GoBack';

import ContentContainer from '../Containers/ContentContainer';
import BackHeader from '../Partials/BackHeader';
import MainFont from '../Utility/MainFont';
import SecondaryFont from '../Utility/SecondaryFont';

import RadiusButton from '../Utility/RadiusButton'

import Style from '../../styles/Style';

import Loader from '../Utility/Loader';

export default class Product extends React.Component {
	constructor(props) {
		super( props );
		this.state = {
			modalVisible: false,
			points: null,
			value: null,
			radioSelected: 1,
			init: false
		}
	}

	componentDidMount() {
		this.props.dispatch( this.props.productsActions.requestProductDetail( { productId: this.props.product.id } ) );
	}

	componentWillReceiveProps( nextProps ) {

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

	render() {

		if( this.props.products.productDetail === null )
			return <Loader color="#FFF" />

		return <View style={{flex: 1}}>
			<CartIcon 	{ ...this.props } />
			<BackHeader title={ this.props.product.category.toUpperCase() } { ...this.props } />
			<ContentContainer>
				<ScrollView>
				<Image source={{ uri: globalConfig.getImageUri( this.props.product.id ) }}
					style={ Style.stylesheet.productImage }
				/>
				<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',margin: Style.DEVICE_HEIGHT * .01}}>
					<Icon name="ios-star" size={15} color="gold" />
					<Icon name="ios-star" size={15} color="gold" />
					<Icon name="ios-star" size={15} color="gold" />
				</View>
				<View style={{ padding: Style.DEVICE_HEIGHT * .04 , paddingBottom: 0 }}>
					<MainFont center fontSize='md'>{ this.props.products.productDetail.name }</MainFont>
				</View>
				<View style={{ padding: Style.DEVICE_HEIGHT * .04 }}>
					<MainFont fontSize='xs'>{ this.props.products.productDetail.description.replace(/&quot;/g, '') }</MainFont>
				</View>
				<View style={{ padding: Style.DEVICE_HEIGHT * .04 , borderTopWidth: 1 , borderBottomWidth: 1 , borderColor:'rgba(0,0,0,.15)' , alignItems: 'center' , justifyContent: 'center' }}>
					<TouchableOpacity style={{ padding: Style.DEVICE_WIDTH * .01 , flex: 1 , justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}
						onPress={() => {
							this.setState({
								radioSelected: 1 ,
								value: this.props.products.productDetail.plusValue,
								points: this.props.products.productDetail.points
							})
						}}
					>
						<View  style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
							<Radio selected={this.state.radioSelected == 1 ? true : false} />
						</View>
	                    <View  style={{flex: 3, alignItems: 'flex-start', justifyContent: 'center'}}>
	                    	<SecondaryFont fontSize='lg' style={{paddingLeft: 10}}>{ this.props.products.productDetail.points + 'pts + $/.' + this.props.products.productDetail.plusValue }</SecondaryFont>
                    	</View>
					</TouchableOpacity>
					<TouchableOpacity style={{ padding: Style.DEVICE_WIDTH * .01 , flex: 1 , justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}
						onPress={() => {
							this.setState({
								radioSelected: 2 ,
								value: this.props.products.productDetail.plusValue2,
								points: this.props.products.productDetail.points2
							})
						}}
					>
						<View  style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
							<Radio selected={this.state.radioSelected == 2 ? true : false} />
						</View>
						<View  style={{flex: 3, alignItems: 'flex-start', justifyContent: 'center'}}>
		                    <SecondaryFont fontSize='lg' style={{paddingLeft: 10}}>{ this.props.products.productDetail.points2 + 'pts + $/.' + this.props.products.productDetail.plusValue2 }</SecondaryFont>
		                </View>
					</TouchableOpacity>
				</View>
				<View style={{ padding: Style.DEVICE_HEIGHT * .04 , flexDirection: 'row' , paddingBottom: 0 }}>
					<View style={{flex: 1 , alignItems: 'center' , justifyContent: 'center'}}>
						<View style={{
							backgroundColor: '#FFF',
							flex: 1,
							borderRadius: 6 , backgroundColor: 'rgba(0,0,0,0)' ,
							borderWidth: 1, borderColor: 'rgba(0,0,0,.2)' ,
							alignSelf: 'stretch',
							marginRight: 10
							}}>
							<Image style={ styles.caret } source={ require( '../../img/product/arrow-select.png' ) }/>
							<Picker
							iosHeader="Select one"
							mode="dropdown"
							selectedValue={"1"}
							onValueChange={()=> null}
							style={{ flex: 1 , alignSelf: 'stretch' }}
							textStyle={{ flex: 1 , alignSelf: 'stretch' , textAlign: 'left' , fontSize: 12 , paddingLeft: 8 , paddingTop: 2}}
							>
								<Picker.Item label="1" value="1" />
								<Picker.Item label="2" value="2" />
								<Picker.Item label="3" value="3" />
								<Picker.Item label="4" value="4" />
								<Picker.Item label="5" value="5" />
								<Picker.Item label="6" value="6" />
								<Picker.Item label="7" value="7" />
								<Picker.Item label="8" value="8" />
								<Picker.Item label="9" value="9" />
								<Picker.Item label="10" value="10" />
							</Picker>
						</View>
					</View>
					<View style={{flex: 3 , justifyContent: 'center'}}>
						<RadiusButton
							onPress={ () => {
								this.props.dispatch( this.props.shoppingActions.addToCart({
									id: this.props.product.id,
									name: this.props.products.productDetail.name,
									value: this.state.value,
									points: this.state.points
								}));
							}}
							text={'Añadir al carrito'}
						/>
					</View>
				</View>
				<View style={{ padding: Style.DEVICE_HEIGHT * .04 }}>
					{ this._seeStock() }
				</View>
				</ScrollView>
			</ContentContainer>
		</View>;
	}

	_seeStock() {

		if( true || this.props.products.productDetail.errorCode != '5' )
			return <RadiusButton
				inverted
				onPress={ () => {}}
				text={'Ver stock'}
			/> ;

		return null;

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
