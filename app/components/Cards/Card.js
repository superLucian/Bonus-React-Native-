import React from 'react';
import { Navigator, StyleSheet, Dimensions, View, Text, Image} from 'react-native';


import Header   from '../Partials/Header';
import Button   from '../Partials/Button';

import ContentContainer from '../Containers/ContentContainer';
import BackHeader from '../Partials/BackHeader';

var window = Dimensions.get('window');

export default ( props ) => <View  style={ { flex: 1 } }>
	<BackHeader title="MIS TARJETAS" {...props}/>
	<ContentContainer>
		<View style={ { flex: 1 , padding: 20, alignItems: 'center' , justifyContent: 'center'} }>
			<View style={styles.imgContainer}>
				<Image source={require('../../img/tar-bonus.png')} style={styles.img}/>
				<Text>{props.card.cardName}</Text>
			</View>
			<View style={styles.textContainer}>
				<View style={{flexDirection:'row',justifyContent:'space-between'}}>
					<Text>Número de tarjeta</Text>
					<Text>{props.card.cardNumber}</Text>
				</View>
				<View style={styles.bar}/>
				<Text style={styles.text}>Alias</Text>
				<Text >{props.card.cardAlias}</Text>
				<Text style={styles.text}>Tarjeta de crédito asociada</Text>
				<Text >{props.card.creditCardNumber}</Text>
				<Text style={styles.text}>Balance</Text>
				<Text >{props.card.cardBalance}</Text>
				<View style={styles.bar}/>
			</View>
			<Button invert text="Últimos movimientos" onPress={
				(event)=>{
					props.navigator.push({
						name: "Movements",
						card: props.card,
						sceneConfig: Navigator.SceneConfigs.FloatFromRight
					});
				}
			}/>
			<Button text="Transferir Soles"/>
		</View>
	</ContentContainer>
</View>;


let styles = StyleSheet.create({
	imgContainer:{
		width: window.width * 0.6,
		alignItems:'center',
		justifyContent:'center',
		// borderRadius:5,
		// borderWidth:1,
		// borderColor:'rgba(0,0,0,.15)'
	},
	img:{
		resizeMode:'contain',
		width: 120
	},
	textContainer:{
		width:window.width * 0.8,
		marginTop:15,
		marginBottom:30
	},
	bar:{
		borderBottomWidth:2,
		borderBottomColor:'gray',
		marginTop:15,
		alignSelf:'stretch',
		width:window.width * 0.8,
		marginBottom:15
	},
	text:{
		fontSize:12,
		color:'gray',
		paddingTop:10,
		paddingBottom:10,
		textAlign:'left'
	}
});