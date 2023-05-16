import axios from 'axios';
import * as actionTypes from './actionTypes';

export const resetStart = () => {
    return {
        type: actionTypes.PASSWORD_RESET_START
    };
};

export const resetSuccess = (email) => {
    console.log('resetSuccess');
    return {
        type: actionTypes.PASSWORD_RESET_SUCCESS,
        email: email
    };
};

export const resetFail = (error) => {
    return {
        type: actionTypes.PASSWORD_RESET_FAIL,
        error: error
    };
};

export const reset = ( email ) => {
    console.log('reset password: '+ email);
    
    return dispatch => {
            dispatch(resetStart());
            const resetData = {
            requestType: actionTypes.PASSWORD_RESET,
            email: email
        };

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA5ReTJAg-8nGiJwFI4AYBvQF2wKBZoyqM', resetData)
        .then(response => {
            console.log(response);
            dispatch(resetSuccess(response.data.email));
        })
        .catch(err => {
            console.log(err);
            dispatch(resetFail(err));
        });
    };
};