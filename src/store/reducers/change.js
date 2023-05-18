import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    email: null,
    error: null
};

const changeSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        email: action.email,
        error: null
     } );
};

const changeFail = (state, action) => {
    return updateObject( state, {
        error: action.error
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CHANGE_PASSWORD_SUCCESS: return changeSuccess(state, action);
        case actionTypes.CHANGE_PASSWORD_FAIL: return changeFail(state, action);
        default:
            return state;
    }
};

export default reducer;