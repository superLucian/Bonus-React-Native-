// 'use strict'

import React from 'react';

import HeaderContainer from '../Containers/HeaderContainer';
import GenericHeader from '../Partials/GenericHeader';
import GoBack from './GoBack';

export default ( props ) => <HeaderContainer>
	<GoBack  {...props} />
	<GenericHeader title={props.title} />
</HeaderContainer>;