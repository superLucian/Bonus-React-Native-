// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import EditCard from './Cards/EditCard';

export default ( props ) => <BaseContainer>
	<EditCard { ...props } navigator={ props.navigator }/>
</BaseContainer>;