// 'use strict'

import React from 'react';

import BaseContainer 	from './Containers/BaseContainer';
import TransferPointsContinued 	from './Points/TransferPointsContinued';

export default ( props ) => <BaseContainer>
	<TransferPointsContinued { ...props } navigator={ props.navigator }/>
</BaseContainer>;