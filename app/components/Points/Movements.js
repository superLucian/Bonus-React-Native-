import React from 'react';
import { Navigator, StyleSheet, Dimensions, View, Text, Image, ScrollView} from 'react-native';


import Header   from '../Partials/Header';
import Button   from '../Partials/Button';

import ContentContainer from '../Containers/ContentContainer';
import BackHeader from '../Partials/BackHeader';

import Loader from '../Utility/Loader';

var window = Dimensions.get('window');

export default class Movements extends React.Component {
	componentWillMount(){
		this.props.dispatch(this.props.pointsActions.requestMovements( { userId: this.props.session.user.id } ));
	}
	_movements = () => {
		if( this.props.points.movements === null ||
			this.props.points.movements.constructor !== Array ||
			this.props.points.movements.length == 0
		)
		    return <Loader color="#000" />

		const movements = this.props.points.movements.map(( movement , index ) => <View
				key={ index + '_' + movement.dateTime }
				style={{ flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center', marginLeft: 20, marginRight: 20,
					borderBottomColor: 'rgba(0,0,0,.15)',
					borderBottomWidth: 1,
					paddingBottom: 5,
					paddingTop: 5,
				}}
			>
			<Text style={{ flex: 1 , color: '#000', fontSize: 11}}>{ movement.dateTime.match(/(\d{4})(\d{2})(\d{2})/)[3] + '-' + movement.dateTime.match(/(\d{4})(\d{2})(\d{2})/)[2] + '-' + movement.dateTime.match(/(\d{4})(\d{2})(\d{2})/)[1]}</Text>
			<Text style={{ flex: 2 , color: '#000', fontSize: 12}}>{movement.description}</Text>
			<Text style={{ flex: 1 , color: '#000', paddingLeft: 5}}>{movement.amount}</Text>
		</View>);

		return <ScrollView>
			{movements}
		</ScrollView>
	}
	render(){
		return <View  style={ { flex: 1 } }>
		<BackHeader title="ÚLTIMOS MOVIMIENTOS" {...this.props}/>
		<ContentContainer>
			<View
				style={{ flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center', marginLeft: 20, marginRight: 20,
					borderBottomColor: 'rgba(0,0,0,.6)',
					borderBottomWidth: 1,
					paddingBottom: 10,
					paddingTop: 10,
					marginBottom: 5
				}}
				>
				<Text style={{ flex: 1 , color: '#000', }}>Fecha</Text>
				<Text style={{ flex: 2 , color: '#000', }}>Descripcion</Text>
				<Text style={{ flex: 1 , color: '#000', }}>Monto</Text>
			</View>
			{this._movements()}
		</ContentContainer>
	</View>;
	}
}

let styles = StyleSheet.create({
	imgContainer:{
		width: window.width * 0.6,
		alignItems:'center',
		justifyContent:'center',
		// borderRadius:5,
		// borderWidth:1,
		// borderColor:'rgba(0,0,0,.15)'
	},
	img:{
		resizeMode:'contain',
		width: 120
	},
	textContainer:{
		width:window.width * 0.8,
		marginTop:15,
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