import * as actionTypes from '../actions/actionTypes';

const initialState = {
    reciever: null,
    sendAmount: null,
    loading: false,
    isScan: false,
    errorMessage: null,
    offlineData: {},
    userData: {},
    errorScreen: false,
    successScreen: false,
    changeNft: false
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SETRECIEVER:
            return {...state, reciever: action.value};
        case actionTypes.SETLOADING:
            return {...state, loading: action.value};
        case actionTypes.SETSENDAMOUNT:
            return {...state, sendAmount: action.value};
        case actionTypes.SETISSCAN:
            return {...state, isScan: action.value};
        case actionTypes.SETOFFLINEDATA:
            return {...state, offlineData: action.value};
        case actionTypes.SETERR:
            return {...state, errorMessage: action.value};
        case actionTypes.SETUSERDATA:
            return {...state, userData: action.value};
        case actionTypes.SETERRORSCREEN:
            return {...state, errorScreen: action.value};
        case actionTypes.SETSUCCESSSCREEN:
            return {...state, successScreen: action.value};
        case actionTypes.CHANGENFT:
            return {...state, changeNft: action.value};
    }
    return state;
}

export default reducer;