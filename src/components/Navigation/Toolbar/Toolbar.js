import React, { Component } from 'react';
import classes from './Toolbar.css';
import Clock from '../../../hoc/Clock/Clock';
import Popup from '../../../hoc/Popup/Popup';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import GooglePage  from '../../GooglePage/GooglePage';
import Login from  '../../Login/Login';
import ForgetPassword from  '../../ForgetPassword/ForgetPassword';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logout from  '../../Login/Logout/Logout';

const toolbar = (props) => (
  <div className={classes.Toolbar}>
        
  <header className={classes.Blog}>    
    <nav>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>  

    <Popup />
  </header>

  <Switch>            
    <Route path = "/Login" component={Login} />    
    <Route path = "/ForgetPwsd" component={ForgetPassword} />
    <Route path = "/Logout" component={Logout} />
    <Route path = "/" component={GooglePage} />
    {/* <Redirect from="/" to="/Dashboard" /> */}
  </Switch>
  </div>
);

export default toolbar;