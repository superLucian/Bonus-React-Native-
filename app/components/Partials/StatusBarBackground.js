// 'use strict'

import React from 'react';
import { Platform , StyleSheet , View } from 'react-native';

export default class StatusBarBackground extends React.Component
{
	render() {
		if (Platform.OS === 'ios')
			return <View 
				style={[
					styles.statusBarBackground,
					this.props.style || {}
				]}
				>
			</View>;
		else
		  return null;
	}
}

const styles = StyleSheet.create({
	statusBarBackground: {
		height: 20,
		backgroundColor: "transparent"
	}
})