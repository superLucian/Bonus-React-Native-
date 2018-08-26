// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import AddCard from './Cards/AddCard';

export default ( props ) => <BaseContainer>
	<AddCard { ...props } navigator={ props.navigator }/>
</BaseContainer>;