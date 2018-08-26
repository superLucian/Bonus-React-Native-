// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import Cards from './Cards/Cards';

export default ( props ) => <BaseContainer>
	<Cards { ...props } navigator={ props.navigator }/>
</BaseContainer>;