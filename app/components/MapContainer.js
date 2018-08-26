// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import TheMap from './Map/TheMap';

export default ( props ) => <BaseContainer>
	<TheMap { ...props } navigator={ props.navigator }/>
</BaseContainer>;