import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';


import Header   from '../Partials/Header';
import Button   from '../Partials/Button';

( props ) => <View style={ styles.container }>
    <View style={ styles.imgContainer }>
        <Image source={require('../../img/cards/Masterdcard.png')} style={ styles.img }/>
        <Text>Tarjeta ..... 08/18 </Text>
    </View>
    <View style={ styles.textContainer }>
        <View style={ styles.bar }/>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text >Fecha de vencimiento</Text>
            <Text >07/17</Text>
        </View>
        <Text style={ styles.text }>Direccion de Facturación</Text>
        <Text style={ {width:120,alignSelf:'flex-start'} }>ksjdgfnf wñdfj wñlfnm wdpkf </Text>
        <View style={ styles.bar } />
    </View>
    <Button invert text="Editar Tarjeta"/>
    <Button text="Eliminar Tarjeta"/>
</View>;

export default () => null;

let styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:20
    },
    imgContainer:{
        width:window.width * 0.6,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        borderWidth:2,
        borderColor:'gray'
    },
    img:{
        resizeMode:'contain',
        width:150
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