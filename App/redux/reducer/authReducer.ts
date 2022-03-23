import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userData: {}
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SETUSERDATA:
            return {...state, userData: action.value}
    }
    return state
};

export default authReducer;