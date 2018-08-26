// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer'
import Wallet from './Wallet/Wallet';

export default ( props ) => <BaseContainer>
	<Wallet { ...props } navigator={ props.navigator }/>
</BaseContainer>;