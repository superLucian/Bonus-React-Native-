// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import Movements from './Points/Movements';

export default ( props ) => <BaseContainer>
	<Movements { ...props } navigator={ props.navigator }/>
</BaseContainer>;