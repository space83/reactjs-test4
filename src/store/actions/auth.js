import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, email, displayName) => {
    console.log('authSuccess');
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        email: email,
        displayName: displayName
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return dispatch => {  
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5ReTJAg-8nGiJwFI4AYBvQF2wKBZoyqM', authData)
        .then(response => {
            console.log(response);
            //dispatch(getUserData(response.data.idToken));
            const infoData = {
                idToken: response.data.idToken             
            }

            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA5ReTJAg-8nGiJwFI4AYBvQF2wKBZoyqM', infoData)
            .then(response2 => {
                console.log(response2);
                //console.log('displayName' + response2.data.displayName);
                dispatch(authSuccess(response.data.idToken, response.data.localId, response.data.email, response.data.displayName));
            })
            .catch(err => {
                console.log(err);
            });       
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail(err));
        });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};