// 'use strict'

import React from 'react';

import BaseContainer 	from './Containers/BaseContainer';
import TransferPoints 	from './Points/TransferPoints';

export default ( props ) => <BaseContainer>
	<TransferPoints { ...props } navigator={ props.navigator }/>
</BaseContainer>;