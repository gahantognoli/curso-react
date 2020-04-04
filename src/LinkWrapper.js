import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWrapper = props => <NavLink activeStyle={{fontWeight: 'bold'}} {...props} />

export default LinkWrapper;