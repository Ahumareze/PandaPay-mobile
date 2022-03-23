import * as actions from './actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage'

const init = () => {
    return (dispatch: any) => {
        const data = AsyncStorage.getItem('userId');
        console.log(data)    
    }
}

export {
    init
}