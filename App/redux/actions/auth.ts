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
        dispatch(setAuthError(null))

        //post data to backend
        axios.post(dbUrl + '/signup', data)
            .then(r => {
                dispatch(setLoading(false));
                dispatch(setData(r.data))
            })
            .catch(e => {
                if(e.response){
                    dispatch(setAuthError(e.response.data.message))
                }else{
                    dispatch(setAuthError('network error'))
                }
                dispatch(setLoading(false));
            })
    }
};

const login = (data) => {
    
    return (dispatch: any) => {
        dispatch(setLoading(true));
        dispatch(setAuthError(null))

        //Post data to backend
        axios.post(dbUrl + '/login', data)
            .then(r => {
                dispatch(setData(r.data))
                dispatch(setLoading(false))
            })
            .catch(e => {
                if(e.response.data){
                    dispatch(setAuthError(e.response.data.message))
                }else{
                    dispatch(setAuthError('network error'))
                }
                dispatch(setLoading(false));
            })
    }
}

const setData = (response: any) => {
    return (dispatch: any) => {
        AsyncStorage.setItem('username', response.username);
        AsyncStorage.setItem('email', response.email);
        AsyncStorage.setItem('nft', JSON.stringify(response.nft));
        AsyncStorage.setItem('id', response.id);
        AsyncStorage.setItem('token', response.token);

        dispatch(setToken(response.token));
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

export {
    init,
    signup,
    logout,
    setAuthError,
    login
}