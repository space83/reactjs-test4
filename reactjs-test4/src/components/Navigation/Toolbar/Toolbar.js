import React, { Component } from 'react';
import classes from './Toolbar.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import GooglePage  from '../../GooglePage/GooglePage';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideMenu from  '../../SideMenu/SideMenu';
import asyncComponent from '../../../hoc/asyncComponent/asyncComponent';

const asyncLogin = asyncComponent(() => {
  return import('../../Login/Login');
});

const asyncForgetPassword = asyncComponent(() => {
  return import('../../ForgetPassword/ForgetPassword');
});

const asyncUnauthorized = asyncComponent(() => {
  return import('../../Unauthorized/Unauthorized');
});

const asyncLogout = asyncComponent(() => {
  return import('../../Login/Logout/Logout');
});

const asyncMyProfile = asyncComponent(() => {
  return import('../../Profile/Profile');
});

const asyncChangePwsd = asyncComponent(() => {
  return import('../../ChangePwsd/ChangePwsd');
});

const asyncProducts = asyncComponent(() => {
  return import('../../Products/Products');
});

const asyncProduct = asyncComponent(() => {
  return import('../../Products/Product/Product');
});

class Toolbar extends Component {

  render () {

    let routes = (
      <Switch>            
        <Route path = "/Login" exact component={asyncLogin} />    
        <Route path = "/ForgetPwsd" exact component={asyncForgetPassword} />
        <Route path = "/" exact component={GooglePage} />
        <Route path = "/" component={asyncUnauthorized} />
    </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>            
          <Route path = "/Logout" exact component={asyncLogout} />
          <Route path = "/MyProfile" exact component={asyncMyProfile} />
          <Route path = "/ChangePwsd" exact component={asyncChangePwsd} />
          <Route path = "/Product" exact component={asyncProducts} />
          <Route path = "/Product/:id" exact component={asyncProduct} />
      </Switch>
      );
    }

    return (
      <div className={classes.Toolbar}>        
      <header className={classes.Blog}>    
        <nav>
          <NavigationItems isAuthenticated={this.props.isAuth} email={this.props.email} displayName={this.props.displayName} />
        </nav>        
      </header>

      <div className={classes.content}>        
        {this.props.isAuth ? (
            <div className={classes.left}>   
              <SideMenu /> 
            </div>
        ): null}  

        <div className={classes.right}> 
          {routes}
        </div>
      </div>
    </div> 
    ) 
  }
}

export default Toolbar;