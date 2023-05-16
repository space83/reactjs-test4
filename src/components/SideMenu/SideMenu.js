import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideMenu.css';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';

const sideMenu = ( props ) => (
    <div className={classes.Leftbar}>
        <nav className={classes.Blog}>
            <ul>
                <NavigationItem link="/MyProfile">Profile</NavigationItem>
                <NavigationItem link="/ChangePwsd">Change Password</NavigationItem>
                <NavigationItem link="/Product">Products</NavigationItem>
            </ul>
        </nav>              
    </div>
);

export default sideMenu;
