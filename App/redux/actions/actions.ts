//Imported components
import * as actionTypes from './actionTypes';

//TextData
import users from '../../testData/users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { dbUrl } from '../../utils/urls';

//Test components
const getUserData = () => {
    return async (dispatch: any) => {
        dispatch(setLoading(true));

        //get id from local storage
        const id = await AsyncStorage.getItem('id');

        axios.post(dbUrl + '/user', {id})
            .then(r => {
                dispatch(setUserData(r.data));
                dispatch(setLoading(false));
            })
            .catch(e => {
                console.log(e);
                dispatch(setLoading(false));
                dispatch(setErrScreen(true))
            })

    }
};

const setUserData = (value: any) => {
    return{
        type: actionTypes.SETUSERDATA,
        value
    }
}

const setErrScreen = (value: boolean) => {
    return{
        type: actionTypes.SETERRORSCREEN,
        value
    }
}

const getReciever = (email: string) => {
    return (dispatch: any) => {
        dispatch(setLoading(true));

        //Validate email
        if(email){
        //Run function to fetch user from database
        axios.post(dbUrl + '/reciever', {email})
            .then(r => {
                dispatch(setReciever(r.data))
                dispatch(setLoading(false));
                dispatch(setErrorMessage(null))
            })
            .catch(e => {
                if(e.response){
                    dispatch(setErrorMessage(e.response.data.message))
                }else{
                    dispatch(setErrorMessage('network error'))
                }
                dispatch(setLoading(false));
            })
        }else{
            dispatch(setErrorMessage('please enter a valid email'));
            dispatch(setLoading(false))
        }
    }
};

const setErrorMessage = (value: string) => {
    return{
        type: actionTypes.SETERR,
        value
    }
}

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
            nft: JSON.parse(nft)
        }
        dispatch(setOfflineData(data))
    }
};

const qrData = (data: any) => {
    return (dispatch: any) => {
        const arr = data.split(' ');
        const reciever = {
            username: arr[0],
            email: arr[1],
            nft: JSON.parse(arr[2]),
            id: arr[3],
            amount: arr[4]
        }
        dispatch(setIsScan(false))
        dispatch(setSendAmount(arr[4]))
        dispatch(setReciever(reciever));
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
    getUserData,
    getReciever,
    dismiss,
    setSendAmount,
    setIsScan,
    getOfflineData,
    setErrorMessage,
    qrData
}