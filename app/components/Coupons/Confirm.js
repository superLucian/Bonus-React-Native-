// 'use strict'

import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Navigator,
	Text,
	Image
} from 'react-native';

import {Button, Icon} from 'native-base';

import GoBack from '../Partials/GoBack';

export default ( props ) => (

		<View style={styles.container}>
                <View style={styles.header}>
                	<View style={{width:Dimensions.get('window').width,
                				  flexDirection:'row',
                				  justifyContent:'center'}}>
                		<Image source={require('../../img/bonus-logoBlanco300.png')}
                			   style={{ 
                			   			height: 58/3.7, // 58
                			   			width: 300/3.7, // 300
		                			   	resizeMode: 'contain',
		                			   	top: -5
		                			   	
		                			   }} 	
        				/>
                	</View>
            		<Text style={{

            			fontSize:20,
						color:'#FFF',
						textAlign:'center',
						fontFamily: 'Oswald',
						marginTop: 0,
						top: -10
					}}>
            		CUPONES
            		</Text>
                </View>               

                <View style={styles.main}>
                	<Image source={require('../../img/cupones/sucess.jpg')} style={{ alignSelf: 'center' , resizeMode: 'contain' , height: 170 }}/>
					<View style={{
						paddingTop:25,
						marginLeft:5,
						marginRight:5,
						marginTop: 15,
						marginBottom: 0,
						// borderTopWidth:2,
						// borderTopColor:'rgba(0,0,0,.15)'
					}}>
 						<Text style={{fontFamily: 'Varela Round',textAlign:'center',fontSize:18,color: 'black',}}>Felicidades hemos procesado su orden satisfactoriamente</Text>
					</View>
					<Button block rounded style={styles.button}
						onPress={() => {

							props.navigator.push({
								name: "Home",
								sceneConfig: Navigator.SceneConfigs.FloatFromLeft
							});

						}}
					> Ir a mi cuenta </Button>	
                </View>
        </View>
        

    
);

let styles = StyleSheet.create({
	container:{

		height:Dimensions.get('window').height,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center'
				
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
		padding:40,		
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
		backgroundColor: 'rgb(32,76,165)', 
		borderRadius: 20,
		shadowColor: 'transparent',		
		width: Dimensions.get('window').width*0.8,
		alignSelf:'center',
		top: 60,
	}
});

 // 				   <Button transparent>
 //                    	<GoBack/> 
 //                    </Button>	                   	                    
 //                    <Thumbnail square source={ require( '../../img/bonus-logoBlanco300.png' ) } style={ styles.logo }/>                
 //                    <Button transparent>
 //                        <Icon name='ios-refresh' color='white'/>
 //                    </Button>
