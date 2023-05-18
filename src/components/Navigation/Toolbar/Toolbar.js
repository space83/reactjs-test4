import React, { Component } from 'react';
import classes from './Toolbar.css';
import Popup from '../../../hoc/Popup/Popup';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import GooglePage  from '../../GooglePage/GooglePage';
import Login from  '../../Login/Login';
import ForgetPassword from  '../../ForgetPassword/ForgetPassword';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logout from  '../../Login/Logout/Logout';
import Profile from  '../../Profile/Profile';
import ChangePwsd from  '../../ChangePwsd/ChangePwsd';
import SideMenu from  '../../SideMenu/SideMenu';
import Products from  '../../Products/Products';

const toolbar = (props) => (

    <div className={classes.Toolbar}>        
      <header className={classes.Blog}>    
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} email={props.email} />
        </nav>        
      </header>

      <div className={classes.content}>        
        {props.isAuth ? (
                  <div className={classes.left}>   
                    <SideMenu /> 
                  </div>
        ): null}  

        <div className={classes.right}> 
          <Switch>            
            <Route path = "/Login" component={Login} />    
            <Route path = "/ForgetPwsd" component={ForgetPassword} />
            <Route path = "/Logout" component={Logout} />
            <Route path = "/MyProfile" component={Profile} />
            <Route path = "/ChangePwsd" component={ChangePwsd} />
            <Route path = "/Product" component={Products} />
            <Route path = "/" component={GooglePage} />
          </Switch>
        </div>
      </div>
    </div> 
);

export default toolbar;