import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from '../UI.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import ForgetPassword  from  '../ForgetPassword/ForgetPassword';
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
        // axios.get('https://react-my-burger-ac7a3-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json')
        // .then(response => {
        //     this.setState({ingredients: response.data})
        //     //console.log("got data");
        // })
        // .catch( error => {
        //     this.setState( { error: true } );
        //     //console.log("error");
        // } );
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

        // if ( rules.maxLength ) {
        //     isValid = value.length <= rules.maxLength && isValid
        // }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        // if ( rules.isNumeric ) {
        //     const pattern = /^\d+$/;
        //     isValid = pattern.test( value ) && isValid
        // }

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

    // switchAuthModeHandler = () => {
    //     console.log('switchAuthModeHandler');
    //     this.setState(prevState => {
    //         return {isSignup: !prevState.isSignup};
    //     });        
    // }

    render () {
        // let form = (            
        //     <form onSubmit={this.submitHandler}>
        //         <input className={classes.Input} type="text" name="name" placeholder="UserName" />
        //         <p className={classes.Error}>Username is required</p>
        //         <input className={classes.Input} type="text" name="password" placeholder="Password" />               
        //         <p className={classes.Error}>Password is required</p>                    
        //         <button className={classes.Button}>Sign in</button>
        //     </form>
        // );

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

        // let errorMessage = null;

        // if (this.props.error) {
        //     errorMessage = (
        //         <p>{this.props.error.message}</p>
        //     );
        // }

        // let authRedirect = null;
        // if (this.props.isAuthenticated) {
        //     authRedirect = <Redirect to={this.props.authRedirectPath}/>
        // }

        return (
            <div>
                <p>Login</p>
                <div className={classes.ContactData}>
                    <h5>Sign in to start your session</h5>
                    {/* {authRedirect} */}
                    {/* {errorMessage} */}
                    <form>
                        {form} 
                        <NavLink
                        to={{
                            pathname: '/ForgetPwsd'
                        }}       
                        >I forgot my password
                        </NavLink> 
                    </form>
                    <Button disabled={!this.state.formIsValid}
                    clicked={this.submitHandler} //{this.switchAuthModeHandler} --> THIS NOT USED!
                    btnType="Danger">SIGN IN</Button>
                </div>

 
            </div>
        );     
    }
}

// const mapStateToProps = state => {
//     return {
//         // loading: state.auth.loading,
//         error: state.auth.error,
//         //isAuthenticated: state.auth.token !== null
//         //buildingBurger: state.burgerBuilder.building,
//         //authRedirectPath: state.auth.authRedirectPath
//     };
// };

const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps");
    return {
        onAuth: ( email, password ) => dispatch( actions.auth( email, password ) )    
    };
};

export default connect(null, mapDispatchToProps)(Login);