// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import Movements from './Cards/Movements';

export default ( props ) => <BaseContainer>
	<Movements { ...props } />
</BaseContainer>;