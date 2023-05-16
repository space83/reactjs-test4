import React from 'react';
import Clock from '../../../hoc/Clock/Clock';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul>
        <Clock />
        {!props.isAuthenticated
            ? <NavigationItem link="/Login">Login</NavigationItem>
            : <NavigationItem link="/Logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;
