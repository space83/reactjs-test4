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
import Product from  '../../Products/Product/Product';
import Unauthorized from  '../../Unauthorized/Unauthorized';

class Toolbar extends Component {

  render () {

    let routes = (
      <Switch>            
        <Route path = "/Login" component={Login} />    
        <Route path = "/ForgetPwsd" component={ForgetPassword} />
        <Route path = "/" exact component={GooglePage} />
        <Route path = "/" component={Unauthorized} />
    </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>            
          <Route path = "/Logout" component={Logout} />
          <Route path = "/MyProfile" component={Profile} />
          <Route path = "/ChangePwsd" component={ChangePwsd} />
          <Route path = "/Product" exact component={Products} />
          <Route path = "/Product/:id"component={Product} />
      </Switch>
      );
    }

    return (
      <div className={classes.Toolbar}>        
      <header className={classes.Blog}>    
        <nav>
          <NavigationItems isAuthenticated={this.props.isAuth} email={this.props.email} />
        </nav>        
      </header>

      <div className={classes.content}>        
        {this.props.isAuth ? (
                  <div className={classes.left}>   
                    <SideMenu /> 
                  </div>
        ): null}  

        <div className={classes.right}> 
          {/* <Switch>
            <Route path = "/Login" component={Login} />    
            <Route path = "/ForgetPwsd" component={ForgetPassword} />
            <Route path = "/Logout" component={Logout} />
            <Route path = "/MyProfile" component={Profile} />
            <Route path = "/ChangePwsd" component={ChangePwsd} />
            <Route path = "/Product" exact component={Products} />
            <Route path = "/Product/:id"component={Product} />
            <Route path = "/" component={GooglePage} />
          </Switch> */}
          {routes}
        </div>
      </div>
    </div> 
    ) 
  }
}


export default Toolbar;