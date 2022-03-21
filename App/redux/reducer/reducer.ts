import * as actionTypes from '../actions/actionTypes';

const initialState = {
    reciever: 'martin'
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SETRECIEVER:
            return {...state, reciever: action.value}
    }
    return state;
}

export default reducer;