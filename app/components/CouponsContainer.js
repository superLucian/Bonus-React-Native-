// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import Confirm from './Coupons/Confirm';
import Coupons from './Coupons/Coupons';

export default ( props ) => {

	if( props.view === 'Confirm' )
		return <BaseContainer>
			<Confirm { ...props } navigator={ props.navigator }/>
		</BaseContainer>;

	return <BaseContainer>
		<Coupons { ...props } navigator={ props.navigator }/>
	</BaseContainer>;

}