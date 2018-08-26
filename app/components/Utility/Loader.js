// 'use strict'

import React from 'react';
import { Dimensions, View } from 'react-native';

import { Spinner } from 'native-base';

export default ( props ) => <View style={ { flex: 1 , alignItems: 'center' , justifyContent: 'center' , width: Dimensions.get('window').width } }>
	<Spinner color={ props.color } style={ { alignSelf: 'center' , flex: 1 } }/>
</View>;