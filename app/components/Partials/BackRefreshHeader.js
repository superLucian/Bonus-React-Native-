// 'use strict'

import React from 'react';

import HeaderContainer from '../Containers/HeaderContainer';
import GenericHeader from '../Partials/GenericHeader';
import GoBack from './GoBack';
import Refresh from './Refresh';

export default ( props ) => <HeaderContainer>
	<GoBack  {...props} />
	<Refresh target={props.refreshTarget} {...props}/>
	<GenericHeader title={props.title} />
</HeaderContainer>;