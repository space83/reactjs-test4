import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from '../UI.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Login extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        isLogin: false
    }

    componentDidMount () {
    }

    
    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };

        let formIsValid = true;
        for (let inputIdentifiers in updatedControls) {
            formIsValid = updatedControls[inputIdentifiers].valid && formIsValid;
        }

        this.setState( { controls: updatedControls, formIsValid: formIsValid } );
        console.log(formIsValid);
    }

    submitHandler = (event) => {
        console.log("submithandler");
        event.preventDefault();
        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value );
        
    }

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p className={classes.Error}>{this.props.error.message}</p>
            );
        }

        // let authRedirect = null;
        // if (this.props.isAuthenticated) {
        //     authRedirect = <Redirect to={this.props.authRedirectPath}/>
        // }
   

        return (
            <div>
                {/* <div className={classes.left}>
                    {this.props.isAuthenticated ? <SideMenu /> : 'Log-in'} 
                </div> */}

                {this.props.isAuthenticated ? null : (
                    <div>
                        <p>Log-In</p>
                        <div className={classes.ContactData}>
                            <h5>Sign in to start your session</h5>
                            {/* {authRedirect} */}
                            
                            <form>
                                {form} 
                                {errorMessage}
                                <NavLink
                                to={{
                                    pathname: '/ForgetPwsd'
                                }}       
                                >I forgot my password
                                </NavLink> 
                            </form>
                            <Button disabled={!this.state.formIsValid}
                            clicked={this.submitHandler} //{this.switchAuthModeHandler} --> THIS NOT USED!
                            btnType="Danger">Sign In</Button>
                        </div> 
                    </div> 
                )} 
            
            </div>
        );     
    }
}


const mapStateToProps = state => {
    return {
        // loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
        //buildingBurger: state.burgerBuilder.building,
        //authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps");
    return {
        onAuth: ( email, password ) => dispatch( actions.auth( email, password ) )    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);