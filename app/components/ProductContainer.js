// 'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import Product from './Product/Product';

export default ( props ) => <BaseContainer>
	<Product { ...props } navigator={ props.navigator }/>
</BaseContainer>;