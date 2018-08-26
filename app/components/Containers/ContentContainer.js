// 'use strict'

import React from 'react';
import {
	View,
} from 'react-native';

export default ( props ) => <View style={{ flex: 6,
		backgroundColor: props.backgroundColor ? props.backgroundColor : '#FFF'
	}}>
	{props.children}
</View>;