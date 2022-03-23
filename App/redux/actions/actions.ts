//Imported components
import * as actionTypes from './actionTypes';

//TextData
import users from '../../testData/users';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        
        dispatch(setLoading(false));
    }
};

const getOfflineData = () => {
    return async (dispatch: any) => {
        const username = await AsyncStorage.getItem('username');
        const email = await AsyncStorage.getItem('email');
        const id = await AsyncStorage.getItem('id');
        const nft = await AsyncStorage.getItem('nft');

        const data = {
            username,
            email,
            id,
            nft
        }
        dispatch(setOfflineData(data))
    }
}

const setOfflineData = (data: object) => {
    return{
        type: actionTypes.SETOFFLINEDATA,
        value: data
    }
}

const dismiss = () => {
    return (dispatch: any) => {
        dispatch(setReciever(null));
        dispatch(setSendAmount(null))
    }
}

const setSendAmount = (value: string) => {
    return{
        type: actionTypes.SETSENDAMOUNT,
        value
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

const setIsScan = (value: boolean) => {
    return{
        type: actionTypes.SETISSCAN,
        value
    }
}

export {
    getReciever,
    dismiss,
    setSendAmount,
    setIsScan,
    getOfflineData
}