import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userData: {},
    token: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SETUSERDATA:
            return {...state, userData: action.value};
        case actionTypes.SETTOKEN:
            return {...state, token: action.value}
    }
    return state
};

export default authReducer;