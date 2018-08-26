// 'use strict'
 // Libraries
import React from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, Navigator, Image} from 'react-native';
import { Container, Content, List, ListItem, Text , Badge} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// Components
import Header   from '../../Partials/Header';
import Button   from '../../Partials/Button';
import Loader   from '../../Utility/Loader';

// Utils
import getCardTypeFromCardNumber from '../../../utils/getCardTypeFromCardNumber';

var window = Dimensions.get('window');

export default (props)=>{

    if( props.cards.cards === null || props.cards.cards.constructor !== Array || props.cards.cards.length == 0  )
        return <Loader color="#FFF" />

    const items = props.cards.cards.map((item,index) => {

        var type = getCardTypeFromCardNumber( item.cardNumber );

        var source = {

            Visa: require('../../../img/cards/Visa.png'),
            Mastercard: require('../../../img/cards/Masterdcard.png'),
            Desconocida: require('../../../img/cards/Masterdcard.png')

        }

        return <ListItem
            button
            key={ index }
            style={{height:90,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}
            onPress={ ( event ) => {
                    props.navigator.push({
                        name: "Card",
                        card: item,
                        sceneConfig: Navigator.SceneConfigs.FloatFromRight
                    });
                }}
        >
            <Image style={styles.img} source={source[type]} />
            <Text style={styles.text}> {item.cardName} </Text>
            <Text style={[styles.text,{top:25, fontWeight: 'bold', fontSize: 12}]} note> Tarjeta ({item.cardNumber.substr(item.cardNumber.length - 4)}) </Text>
            <Badge backgroundColor='rgb(32,76,165)'style={{alignSelf:'center'}}>></Badge>
        </ListItem>;
    });

    return <Container style={styles.container}>
        <Content >
            <List >{items}</List>
        </Content>
    </Container>;
}

let styles = StyleSheet.create({

    container:{
        alignSelf:'stretch',
        height: 80,
    },
    body:{
        fontSize: 11,
        color: '#eee'
    },
    img:{
        resizeMode:'contain',
        alignSelf:'flex-start',
        justifyContent:'center',
        width:40,
        height:40
    },
    text:{
        position: 'absolute',
        left: 60,
        top:5,
        fontSize: 10
    }

});