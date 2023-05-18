import React, { Component } from 'react';
//import classes from './ChangePwsd.css';
import classes from '../UI.css';
import * as actions from '../../store/actions/index';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { connect }  from 'react-redux';

class ChangePwsd extends Component {

    state = {
        controls: {
            currentPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Please enter Current password'                    
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            newPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Please enter New password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            newPasswordConfirmed: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Please enter Confirm New password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6  
                },
                valid: false,
                touched: false
            },

        },
        formIsValid: false,
        isLogin: false
    }

    componentDidMount () {
        //console.log('ChangePwsd mount')
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
       
        // validate confirmed passwd features
        let other = '';
        if (controlName === 'newPassword') {
            other = this.state.controls['newPasswordConfirmed'].value;       
        } else if (controlName === 'newPasswordConfirmed') {
            other = this.state.controls['newPassword'].value;             
        } 
            
        let formIsValid = (other === event.target.value ? true : false);
        for (let inputIdentifiers in updatedControls) {
            formIsValid = updatedControls[inputIdentifiers].valid && formIsValid;
        }

        this.setState( { controls: updatedControls, formIsValid: formIsValid } );
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onChange( this.state.controls.currentPassword.value, this.state.controls.newPassword.value, this.props.email );        
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
        } else if (this.props.isSuccessful) {
            errorMessage = (
                <p className={classes.Info}>Change password successful.Please relogin.</p>
            );
        }

        return (
            <div>
                {this.props.isAuthenticated ? null : (
                    <div>
                        <p>Change Password</p>
                        <div className={classes.ChangePass}>                        
                            {/* {authRedirect} */}
                            <form>
                                {form} 
                                {errorMessage}
                            </form>
                            <Button disabled={!this.state.formIsValid}
                            clicked={this.submitHandler}
                            btnType="Danger">Submit</Button>
                        </div> 
                    </div> 
                )}             
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       email: state.auth.email,
       error: state.change.error,
       isSuccessful: state.change.token !== null
    };    
}

const mapDispatchToProps = dispatch => {    
    return {
        onChange: ( currentPassword, newPassword, email ) => dispatch( actions.change( currentPassword, newPassword, email ) )    
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (ChangePwsd);