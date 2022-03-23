import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userData: {},
    token: null,
    authError: null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SETUSERDATA:
            return {...state, userData: action.value};
        case actionTypes.SETTOKEN:
            return {...state, token: action.value};
        case actionTypes.SETAUTHERR:
            return {...state, authError: action.value}
    }
    return state
};

export default authReducer;