import React, { Component } from 'react';
import classes from './Toolbar.css';
import Clock from '../../../hoc/Clock/Clock';
import Popup from '../../../hoc/Popup/Popup';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import GooglePage  from '../../GooglePage/GooglePage';
import Login from  '../../Login/Login';
import ForgetPassword from  '../../ForgetPassword/ForgetPassword';

class toolbar extends Component {
    render () {
      return (
        <div className={classes.Toolbar}>
        
        <header className={classes.Blog}>    
          <nav>
            <ul>
              <li>
              <Clock />
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/Login'
                    // hash: '#submit',
                    // search: '?quick-submit=true'
                  }}       
                  >Login
                </NavLink>
              </li>
            </ul>        
          </nav>  

          <Popup />
      </header>

      <Switch>            
        <Route path = "/Login" component={Login} />
        <Route path = "/Dashboard" component={GooglePage} />
        <Route path = "/ForgetPwsd" component={ForgetPassword} />
        <Redirect from="/" to="/Dashboard" />
      </Switch>
    </div>

      );
    } 
}

export default toolbar;