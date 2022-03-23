import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Imported utilities
import { Input, Loader, Logo, Padding } from '../../../components';
import { height, width } from '../../../utils/dimension';
import * as actions from '../../../redux/actions';

//Imported components
import FormTitle from './FormTitle';
import {Button} from '../../../components';
import ExtraText from './extraText';
import { useDispatch, useSelector } from 'react-redux';
import { red } from '../../../utils/colors';

interface SignupScreenProps{
    nextPage: (e: number) => void
}

const SignupScreen:FC<SignupScreenProps> = ({nextPage}):JSX.Element => {
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.mainReducer.loading);
    const authErr = useSelector((state: any) => state.authReducer.authError);

    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const submit = () => {
        if(username && email && password){
            if(password.length > 6){
                dispatch(actions.signup({username, email, password}))
            }else{
                dispatch(actions.setAuthError('Password too short'))
            }
        }else{
            dispatch(actions.setAuthError('Missing fields'))
        }
        
    }

    let errorMessage;
    if(authErr){
        errorMessage = <Text style={styles.errorM}>{authErr}</Text>
    }

    let view = (
        <View style={styles.Form}>
            <FormTitle name='Sign Up' />
            <Input label='Username' type='default' secure={false} onChange={(e) => setUsername(e)} />
            <Input label='Email' type={'email-address'} secure={false} onChange={(e) => setEmail(e)} />
            <Input label='Password' type={'default'} secure onChange={(e) => setPassword(e)} />
            {errorMessage}
            <Padding padding={30} />
            <Button title='Continue' onClick={() => submit()} />
            <ExtraText text='already have an account?' page='log in' onClick={() => nextPage(2)} />
        </View>
    )

    return (
        <View style={styles.container}>
            <Logo />
            {loading ? <Loader /> : view }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingRight: 10,
        paddingLeft: 10,
        width: width,
        height: height - 10,
        marginTop: 10
    },
    Form: {
        marginTop: 20,
        width: width - 30,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    errorM: {
        color: red,
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 17
    }
})

export default SignupScreen;