//Imported Packages
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//Imported utilities
import * as actions from './actionTypes';
import {dbUrl} from '../../utils/urls';

const init = () => {
    return (dispatch: any) => {
        AsyncStorage.getItem('token')
            .then(r => {
                if(r){
                    dispatch(setToken(r))
                }else{
                    console.log('empty')
                }
            })
            .catch(e => {
                console.log(e)
            })
    }
};

const signup = (data) => {
    return (dispatch: any) => {
        dispatch(setLoading(true));

        //post data to backend
        axios.post(dbUrl + '/signup', data)
            .then(r => {
                dispatch(setLoading(false));
                dispatch(setData(r.data))
            })
            .catch(e => {
                dispatch(setLoading(false));
                dispatch(setAuthError('Network error'))
            })
    }
};

const login = (data) => {
    return (dispatch: any) => {
        dispatch(setLoading(true));

        //Post data to backend
        axios.post(dbUrl + '/login', data)
            .then(r => {
                console.log(r.data);
                dispatch(setLoading(false))
            })
            .catch(e => {
                console.log({...e});
                dispatch(setLoading(false));
                dispatch(setAuthError('network error'))
            })
    }
}

const setData = (response: any) => {
    return (dispatch: any) => {
        AsyncStorage.setItem('username', response.username);
        AsyncStorage.setItem('email', response.email);
        AsyncStorage.setItem('nft', response.nft);
        AsyncStorage.setItem('id', response.id);
        AsyncStorage.setItem('token', response.token);

        dispatch(setToken(response.token));
        dispatch(setUserData({
            username: response.username,
            email: response.email,
            id: response.id,
            nft: JSON.stringify(response.nft)
        }))
    }
};

const setAuthError = (value: string) => {
    return{
        type: actions.SETAUTHERR,
        value
    }
}

const logout = () => {
    return (dispatch: any) => {
        AsyncStorage.clear();
        dispatch(setToken(null));
    }
}

const setLoading = (value: boolean) => {
    return{
        type: actions.SETLOADING,
        value
    }
}

const setToken = (value: string) => {
    return {
        type: actions.SETTOKEN,
        value
    }
}

const setUserData = (value: object) => {
    return {
        type: actions.SETUSERDATA,
        value
    }
}

export {
    init,
    signup,
    logout,
    setAuthError,
    login
}