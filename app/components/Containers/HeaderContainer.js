// 'use strict'

import React from 'react';
import {
	View,
} from 'react-native';

export default ( props ) => <View style={ { flex: 1 } }>
	{props.children}
</View>;