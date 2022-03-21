import * as actionTypes from './actionTypes';

const setReciever = (value: string) => {
    return{
        type: actionTypes.SETRECIEVER,
        value
    }
};

export {
    setReciever
}