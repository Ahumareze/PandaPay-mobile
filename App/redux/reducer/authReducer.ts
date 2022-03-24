import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    authError: null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SETTOKEN:
            return {...state, token: action.value};
        case actionTypes.SETAUTHERR:
            return {...state, authError: action.value}
    }
    return state
};

export default authReducer;