import React, { Component } from 'react';
import classes from '../UI.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { connect } from 'react-redux';

class ForgetPassword extends Component {

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
            }
        },
        formIsValid: false
    }

    componentDidMount () {
        console.log("mount ForgetPassword");      
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
        console.log("submitForgetPasswd");
        event.preventDefault();
        this.props.onReset( this.state.controls.email.value );        
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

        return (
            <div>
                <p>Forget Password</p>
                <div className={classes.ContactData}>
                    <h5>Reset Password</h5>
                    <form>
                        {form}  
                        {errorMessage}
                        <NavLink
                        to={{
                            pathname: '/Login'
                        }}       
                        >Back to login
                        </NavLink> 
                    </form>
                    <Button disabled={!this.state.formIsValid}
                    clicked={this.submitHandler} 
                    btnType="Danger">Reset Password</Button>
                </div>
            </div>
        );        
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps');
    return {
        //error: state.reset.error
        //authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps");
    return {
        onReset: ( email ) => dispatch( actions.reset( email ) )    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);

