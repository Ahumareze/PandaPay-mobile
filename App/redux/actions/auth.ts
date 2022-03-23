import * as actions from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage'

const init = () => {
    return (dispatch: any) => {
        AsyncStorage.getItem('userData')
            .then(r => {
                if(r){
                    // dispatch(setUserData(r))
                }
            })
            .catch(e => {
                console.log(e)
            })
    }
}

const setUserData = (value: object) => {
    return {
        type: actions.SETUSERDATA,
        value
    }
}

export {
    init
}