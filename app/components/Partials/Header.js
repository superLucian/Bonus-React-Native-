// 'use strict'

import   React                                  from 'react';
import { Dimensions,Text,StyleSheet,View,Image} from 'react-native';
import   GoBack                               from './GoBack';

const backBtn = (props) => {
    if( !props.noBackBtn )
        return <GoBack { ...props } />;

    return null;
}        

export default (props) => <View style={styles.container}>   
    {backBtn( props )}
    <View style={styles.header}>
        <View style={styles.imageContainer}>
            <Image source={require('../../img/bonus-logoBlanco300.png')}
                   style={styles.image}   
            />
        </View>
        <Text style={styles.title}>
            {props.titleView}
        </Text>
    </View>
</View>;

let styles = StyleSheet.create({

    container:{
        width:Dimensions.get('window').width,
        flex:4,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
        
    },
    header:{
        flex:2,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },    
    title:{
        fontSize:20,
        color:'#FFF',
        textAlign:'center',
        fontFamily: 'Oswald',
        marginTop: 0,
        top: -10
    },
    imageContainer:{
        width:Dimensions.get('window').width,
        flexDirection:'row',
        justifyContent:'center'
    },
    image:{
        height: 58/3.7, // 58
        width: 300/3.7, // 300
        resizeMode: 'contain',
        top: -5
    }
});