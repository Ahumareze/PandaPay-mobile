import * as actionTypes from '../actions/actionTypes';

const initialState = {
    reciever: null
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SETRECIEVER:
            return {...state, reciever: action.value}
    }
    return state;
}

export default reducer;