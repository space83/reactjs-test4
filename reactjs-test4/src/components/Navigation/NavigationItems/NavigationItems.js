import React from 'react';
import Clock from '../../../hoc/Clock/Clock';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = ( props ) => (
    <div className={classes.row}>
        <div className={classes.column}>
            {!props.isAuthenticated ? null : <p>Hello {props.displayName} </p>}          
        </div>
        <div>
            <ul>
                <Clock />
                {!props.isAuthenticated
                    ? <NavigationItem link="/Login">Login</NavigationItem>
                    : <NavigationItem link="/Logout">Logout</NavigationItem>}
            </ul>
        </div>       
    </div>
);

export default navigationItems;
