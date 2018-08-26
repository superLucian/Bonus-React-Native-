// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import Points from './Points/Points';

export default ( props ) => <BaseContainer>
	<Points { ...props } navigator={ props.navigator }/>
</BaseContainer>;