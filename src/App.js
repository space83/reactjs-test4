import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';
import Login from  './components/Login/Login';
import GooglePage from './components/GooglePage/GooglePage';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';

class App extends Component {
  componentDidMount () {
    console.log("App start");
    this.props.onTryAutoSignup();
}

render () {
  // let routes = (
  //   <Switch>
  //       <Route path = "/Login" component={Login} />
  //       <Route path = "/Dashboard" component={GooglePage} />
  //       <Route path = "/ForgetPwsd" component={ForgetPassword} />
  //       <Redirect from="/" to="/Dashboard" />
  //   </Switch>
  // );

    return (
      <BrowserRouter>
        <div>
          <Layout>              
          </Layout>      
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
