// 'use strict'

import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';

import SecondaryFont from '../../Utility/SecondaryFont';

import Style from '../../../styles/Style';

export default React.createClass({

	tabIcons: [],

	propTypes: {
		goToPage: React.PropTypes.func,
		activeTab: React.PropTypes.number,
		tabs: React.PropTypes.array,
	},

	componentDidMount() {
		this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
	},

	setAnimationValue( { value, } ) {
		this.tabIcons.forEach((icon, i) => {

			const progress = Math.min(1, Math.abs(value - i))

			icon.setNativeProps({
				style: {
					color: this.iconColor(progress),
				},
			});

		});
	},

	//color between rgb(59,89,152) and rgb(204,204,204)
	iconColor(progress) {
		const red = 59 + (204 - 59) * progress;
		const green = 89 + (204 - 89) * progress;
		const blue = 152 + (204 - 152) * progress;
		return `rgb(${red}, ${green}, ${blue})`;
	},

	render() {
		return <View style={[ Style.stylesheet.homeTabsWrapper, this.props.style, ]}>
			{ this.props.tabs.map( ( tab , i ) => {
				return <View key={tab} style={[ Style.stylesheet.homeTabWrapper , { borderBottomColor: ( this.props.activeTab === i ? Style.MAIN_COLOR_ACCENT : 'transparent') } ]}>
					<TouchableOpacity onPress={() => this.props.goToPage(i)} style={ Style.stylesheet.homeTabButton }>
						<SecondaryFont fontSize='sm' color={ this.props.activeTab === i ? Style.BLACK : Style.GRAY0 }>{tab}</SecondaryFont>
					</TouchableOpacity>
				</View>;
			}) }
		</View>;
	},
});