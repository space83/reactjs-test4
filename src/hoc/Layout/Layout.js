import React, { Component } from 'react';
import Aux from '../Aux_/Aux_';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { connect }  from 'react-redux';
import classes from './Layout.css';
import SideMenu from '../../components/SideMenu/SideMenu';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    render () {
        return (
            <Aux>
                <Toolbar 
                   isAuth={this.props.isAuthenticated} 
                   email={this.props.email} />          
            </Aux>         
            )
        }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        email: state.auth.email
    };
};

export default connect(mapStateToProps) (Layout);