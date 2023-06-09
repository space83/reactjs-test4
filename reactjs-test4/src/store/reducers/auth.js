import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    email: null,
    displayName: null,
    error: null,
    isLogin: false
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        email: action.email,
        displayName: action.displayName,
        error: null,
        isLogin: true
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error
    });
}

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null, email: null });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;