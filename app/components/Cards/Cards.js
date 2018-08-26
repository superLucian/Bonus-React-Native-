// 'use strict'

import React from 'react';
import {
	Navigator,
	StyleSheet,
	Text,
	View
} from 'react-native';

import Button   from '../Partials/Button';
import CardList from './Partials/CardList';

import ContentContainer 	from '../Containers/ContentContainer';
import BackRefreshHeader 	from '../Partials/BackRefreshHeader';

export default class Cards extends React.Component {
	render(){
		return <View style={ { flex: 1 } }>
			<BackRefreshHeader { ...this.props } title="MIS TARJETAS" refreshTarget="Cards"/>
			<ContentContainer>
				<View style={ styles.main }>
					<View style={ styles.disclaimerContainer }>
						<Text style={ styles.disclaimerText }>
							Recuerda que no compartimos tu información financiera
						</Text>
					</View>
					<CardList { ...this.props }/>
					<View style={ styles.spacer }></View>
				</View>
			</ContentContainer>
		</View>;
	}
}

let styles = StyleSheet.create({
	disclaimerContainer: {
		paddingBottom: 15,
	},
	disclaimerText: {
		color: 'black',
		fontFamily: 'Varela Round',
		fontSize:17,
		textAlign:'left',
	},
	main: {
		flex: 1,
		alignItems: 'center',
		padding: 20,
	},
	spacer: {
		height: 20,
	}
});