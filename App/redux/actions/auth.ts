import * as actions from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage'

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
    signup
}