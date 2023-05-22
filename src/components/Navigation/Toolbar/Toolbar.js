import React, { Component } from 'react';
import classes from './Toolbar.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import GooglePage  from '../../GooglePage/GooglePage';
import Login from  '../../Login/Login';
import ForgetPassword from  '../../ForgetPassword/ForgetPassword';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logout from  '../../Login/Logout/Logout';
import Profile from  '../../Profile/Profile';
import ChangePwsd from  '../../ChangePwsd/ChangePwsd';
import SideMenu from  '../../SideMenu/SideMenu';
import Products from  '../../Products/Products';
import Product from  '../../Products/Product/Product';
import Unauthorized from  '../../Unauthorized/Unauthorized';

class Toolbar extends Component {

  render () {

    let routes = (
      <Switch>            
        <Route path = "/Login" exact component={Login} />    
        <Route path = "/ForgetPwsd" exact component={ForgetPassword} />
        <Route path = "/" exact component={GooglePage} />
        <Route path = "/" component={Unauthorized} />
    </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>            
          <Route path = "/Logout" exact component={Logout} />
          <Route path = "/MyProfile" exact component={Profile} />
          <Route path = "/ChangePwsd" exact component={ChangePwsd} />
          <Route path = "/Product" exact component={Products} />
          <Route path = "/Product/:id" exact component={Product} />
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