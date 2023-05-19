import axios from 'axios';
import * as actionTypes from './actionTypes';


export const change = ( password, newPassword, email ) => {
    // console.log('changepass store');

    return dispatch => {
        //validate old pass 1st
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5ReTJAg-8nGiJwFI4AYBvQF2wKBZoyqM', authData)
        .then(response => {

            //changepass process
            const changePassData = {
                idToken: response.data.idToken,
                password: newPassword,
                returnSecureToken: true
            }  

            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA5ReTJAg-8nGiJwFI4AYBvQF2wKBZoyqM', changePassData)
            .then(response => {
                console.log(response);
                dispatch(changeSuccess(response.data.idToken, response.data.localId, response.data.email, response.data.displayName));
            })
            .catch(err => {
                console.log(err);
                dispatch(changeFail(err));
            });
        })
        .catch(err => {
            console.log(err);
            dispatch(changeFail(err));
        });
    };
};

export const changeSuccess = (token, userId, email, displayName) => {
    console.log('change pass Success');
    return {
        type: actionTypes.CHANGE_PASSWORD_SUCCESS,
        idToken: token,
        userId: userId,
        email: email,
        displayName: displayName
    };
};

export const changeFail = (error) => {
    console.log('changeFail');
    return {
        type: actionTypes.CHANGE_PASSWORD_FAIL,
        error: error
    };
};

// for testing
export const updateDisplayName = (idToken, displayName) => {
    const payLoad = {
        idToken: idToken,
        displayName: displayName,
        photoUrl: null,
        returnSecureToken: true
    }

    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA5ReTJAg-8nGiJwFI4AYBvQF2wKBZoyqM', payLoad)
    .then(response => {
        console.log(response); 
        return {
            type: actionTypes.UPDATE_DISPLAY_NAME,
            idToken: idToken,
            displayName: displayName
        };
    })
};