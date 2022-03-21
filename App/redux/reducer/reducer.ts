import * as actionTypes from '../actions/actionTypes';

const initialState = {
    reciever: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SETRECIEVER:
            return {...state, reciever: action.value};
        case actionTypes.SETLOADING:
            return {...state, loading: action.value}
    }
    return state;
}

export default reducer;