import React, { Component } from 'react';
import Aux from '../Aux_/Aux_';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import GooglePage  from '../../components/GooglePage/GooglePage';

class Layout extends Component {

render () {
    return (
        <Aux>
            <Toolbar />  
            {/* <GooglePage /> */}
        </Aux>         
        )
    }
}

export default Layout;