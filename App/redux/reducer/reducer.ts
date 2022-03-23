import * as actionTypes from '../actions/actionTypes';

const initialState = {
    reciever: null,
    sendAmount: null,
    loading: false,
    isScan: false
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
    }
    return state;
}

export default reducer;