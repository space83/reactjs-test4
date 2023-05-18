import React, { Component } from 'react';
import { connect }  from 'react-redux';
import classes from '../UI.css';

class Profile extends Component {
    render () {
        return (
            <div>
                <p>My Profile</p>
                <div className={classes.ChangePass}>
                    <label>
                        User Name: displayName
                        <br />
                        Email: {this.props.email}
                    </label>        
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       email: state.auth.email,
       name: 'My Profile'
    };
}

export default connect(mapStateToProps) (Profile);