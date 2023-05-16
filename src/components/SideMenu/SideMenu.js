import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideMenu.css';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';

const sideMenu = ( props ) => (
    <div className={classes.Leftbar}>
        <nav className={classes.Blog}>
            <ul>
                <NavigationItem link="/Login">Profile</NavigationItem>
                <NavigationItem link="/Login">Change Password</NavigationItem>
                <NavigationItem link="/Login">Products</NavigationItem>
            </ul>
        </nav>              
    </div>
);

export default sideMenu;
