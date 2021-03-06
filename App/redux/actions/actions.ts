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
        dispatch(setErrScreen(false))

        //get id from local storage
        const id = await AsyncStorage.getItem('id');

        //fetch userdata
        axios.post(dbUrl + '/user', {id})
            .then(r => {
                //set userdata to the fetched userdata
                dispatch(setUserData(r.data));
                dispatch(setLoading(false));
            })
            .catch(e => {
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
        //fetch user from database
        axios.post(dbUrl + '/reciever', {email})
            .then(r => {
                //Set the reciever state to fetched reciever
                dispatch(setReciever({...r.data, id: r.data._id}))
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
        //get offline data from local storage
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
        //Decipher the qrcode data
        const arr = data.split(' ');
        const reciever = {
            username: arr[0],
            email: arr[1],
            nft: JSON.parse(arr[2]),
            id: arr[3],
            amount: arr[4]
        }

        //close qrcode and set amount and reciever data
        dispatch(setIsScan(false))
        dispatch(setSendAmount(arr[4]))
        dispatch(setReciever(reciever));
    }
};

const transfer = (sender: string, reciever: string, amount: string) => {
    return (dispatch: any) => {
        if(amount){
            dispatch(setLoading(true));

            //initialize data before sending to backend
            const date = new Date().toDateString();
            const data = {
                sender,
                reciever,
                amount: JSON.parse(amount),
                date
            };

            //Post data to backend
            axios.post(dbUrl + '/transfer', data)
                .then(r => {
                    dispatch(setLoading(false))
                    dispatch(setSuccessScreen(true));
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
            dispatch(setErrorMessage('please enter amount'))
        }
    }
};

const updateNft = (nft: number, id:string) => {
    return (dispatch: any) => {
        dispatch(setLoading(true))

        //post nft number and id to backend
        axios.post(dbUrl + '/updateNft', {id, nft})
            .then(r => {
                dispatch(setLoading(false));
                dispatch(changeNft(false));
                AsyncStorage.setItem('nft', JSON.stringify(nft))
            })
            .catch(e => {
                dispatch(setLoading(false));
                alert('Error updating Nft')
            })
    }
}

const changeNft = (value: boolean) => {
    return{
        type: actionTypes.CHANGENFT,
        value
    }
}

const setSuccessScreen = (value: boolean) => {
    return{
        type: actionTypes.SETSUCCESSSCREEN,
        value
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
    qrData,
    transfer,
    setSuccessScreen,
    changeNft,
    updateNft
}