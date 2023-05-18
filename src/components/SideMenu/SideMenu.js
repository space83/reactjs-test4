import React, { Component } from 'react';
import classes from './SideMenu.css';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';

class SideMenu extends Component {    

    render () {
        return (
            <div>
                <div className={classes.Leftbar}>            
                    <nav className={classes.Blog}> 
                        <ul>
                            <NavigationItem link="/MyProfile">Profile</NavigationItem><br />
                            <NavigationItem link="/ChangePwsd">Change Password</NavigationItem><br />
                            <NavigationItem link="/Product">Products</NavigationItem>
                        </ul>
                    </nav>              
                </div>
            </div>
        )
    }
};

export default SideMenu;