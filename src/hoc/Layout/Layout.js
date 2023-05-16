import React, { Component } from 'react';
import Aux from '../Aux_/Aux_';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { connect }  from 'react-redux';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    render () {
        return (
            <Aux>
                <Toolbar 
                   isAuth={this.props.isAuthenticated} />              
            </Aux>         
            )
        }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps) (Layout);