import React, { Component } from 'react';
import classes from '../UI.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import ForgetPassword  from  '../ForgetPassword/ForgetPassword';

class Login extends Component {

    componentDidMount () {
        console.log("login");
    }


    render () {
        let form = (            
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="UserName" />
                <input className={classes.Input} type="text" name="password" placeholder="Password" />               
                {/* <label className={classes.label}>I forgot my password</label> */}                          
                <button className={classes.Button}>Sign in</button>
            </form>
        );

        return (
            <div>
                <p>Login</p>
                <div className={classes.ContactData}>
                    <h5>Sign in to start your session</h5>
                    {form} 
                    {/* <NavLink
                        to="/Login"  
                        exact
                        activeClassName="my-active"                
                        >
                      </NavLink> */}
                    <NavLink
                      to={{
                        pathname: '/ForgetPwsd'
                        // hash: '#submit',
                        // search: '?quick-submit=true'
                      }}       
                      >I forgot my password
                    </NavLink> 
                </div>

                <Switch>            
                        <Route path = "/ForgetPwsd" component={ForgetPassword} />
                        <Redirect from="/" to="/Login" />
                </Switch>  
            </div>

        );
        
    }
}



export default Login;