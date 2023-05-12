import React, { Component } from 'react';
import classes from '../UI.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Login  from  '../Login/Login';

class ForgetPassword extends Component {

    componentDidMount () {
        console.log("ForgetPassword");
    }


    render () {
        let form = (            
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="UserName" />    
                <button className={classes.Button}>Reset Password</button>
            </form>
        );

        return (
            <div>
                <p>Forget Password</p>
                <div className={classes.ContactData}>
                    <h5>Reset Password</h5>
                    {form}  
                    <NavLink
                      to={{
                        pathname: '/Login'
                        // hash: '#submit',
                        // search: '?quick-submit=true'
                      }}       
                      >Back to login
                    </NavLink>  
                </div>

                <Switch>            
                        <Route path = "/Login" component={Login} />
                        {/* <Redirect from="/" to="/Login" /> */}
                </Switch> 
            </div>

        );
        
    }
}

export default ForgetPassword;