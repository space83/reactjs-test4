import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';

const initialState = {
    error: null
};

const resetStart = ( state, action ) => {
    return updateObject( state, { error: null } );
};

const resetSuccess = (state, action) => {
    return updateObject( state, { 
        error: null
     } );
};

const resetFail = (state, action) => {
    return updateObject( state, {
        error: action.error
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PASSWORD_RESET_START: return resetStart(state, action);
        case actionTypes.PASSWORD_RESET_SUCCESS: return resetSuccess(state, action);
        case actionTypes.PASSWORD_RESET_FAIL: return resetFail(state, action);
        default:
            return state;
    }
};

export default reducer;