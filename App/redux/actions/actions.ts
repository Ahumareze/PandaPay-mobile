import * as actionTypes from './actionTypes';

const getReciever = (username: string) => {
    return (dispatch: any) => {
        console.log(username)
    }
}

const setReciever = (value: string) => {
    return{
        type: actionTypes.SETRECIEVER,
        value
    }
};

export {
    getReciever
}