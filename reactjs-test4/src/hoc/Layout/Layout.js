import React, { Component } from 'react';
import Aux from '../Aux_/Aux_';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { connect }  from 'react-redux';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <Toolbar 
                   isAuth={this.props.isAuthenticated} 
                   email={this.props.email}
                   displayName={this.props.displayName}
                   />          
            </Aux>         
            )
        }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        email: state.auth.email,
        displayName: state.auth.displayName
    };
};

export default connect(mapStateToProps) (Layout);