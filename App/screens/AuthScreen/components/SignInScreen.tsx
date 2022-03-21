import React, {FC, useState} from 'react';
import { View, StyleSheet } from 'react-native';

//Imported utilities
import { Input, Logo } from '../../../components';
import { height, width } from '../../../utils/dimension';

//Imported components
import FormTitle from './FormTitle';
import {Button} from '../../../components'
import ExtraText from './extraText';

interface SigninScreenProps{
    nextPage: (e: number) => void
}

const SignInScreen:FC<SigninScreenProps> = ({nextPage}):JSX.Element => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const submit = () => {
        console.log(email, password)
    }

    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.Form}>
                <FormTitle name='Log In' />
                <Input label='Email' type={'email-address'} secure={false} onChange={(e) => setEmail(e)} />
                <Input label='Password' type={'default'} secure onChange={(e) => setPassword(e)} />
                <Button title='Continue' onClick={() => submit()} />
                <ExtraText text='Dont have an account?' page='Sign up' onClick={() => nextPage(1)} />
            </View>
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
    }
})

export default SignInScreen;