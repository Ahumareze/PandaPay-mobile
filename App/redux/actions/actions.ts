import axios from 'axios';

//Imported components
import * as actionTypes from './actionTypes';
import {dbUrl} from '../../utils/urls';

const getReciever = (username: string) => {
    return (dispatch: any) => {
        axios.get(dbUrl)
            .then(r => console.log(r.data))
            .catch(e => console.log(e))
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