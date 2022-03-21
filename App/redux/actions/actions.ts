//Imported components
import * as actionTypes from './actionTypes';

//TextData
import users from '../../testData/users';

//Test components
const findUser = (username: string) => {
    const user = users.find(user => user.username === username);
    return user
} 

const getReciever = (username: string) => {
    return (dispatch: any) => {
        dispatch(setLoading(true));

        //Run function to fetch user from database
        const user = findUser(username);
        dispatch(setReciever(user));
        
        // dispatch(setLoading(false));
    }
}

const setLoading = (value: boolean) => {
    return{
        type: actionTypes.SETLOADING,
        value
    }
}

const setReciever = (value: object) => {
    return{
        type: actionTypes.SETRECIEVER,
        value
    }
};

export {
    getReciever
}