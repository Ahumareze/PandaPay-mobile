import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Imported utilities
import { Input, Logo } from '../../../components';
import { height, width } from '../../../utils/dimension';

//Imported components
import FormTitle from './FormTitle';
import Button from './Button';
import ExtraText from './extraText';

interface SignupScreenProps{
    nextPage: (e: number) => void
}

const SignupScreen:FC<SignupScreenProps> = ({nextPage}):JSX.Element => {
    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const submit = () => {
        console.log(username, email, password)
    }

    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.Form}>
                <FormTitle name='Sign Up' />
                <Input label='Username' type='default' secure={false} onChange={(e) => setUsername(e)} />
                <Input label='Email' type={'email-address'} secure={false} onChange={(e) => setEmail(e)} />
                <Input label='Password' type={'default'} secure onChange={(e) => setPassword(e)} />
                <Button title='Continue' onClick={() => submit()} />
                <ExtraText text='already have an account?' page='log in' onClick={() => nextPage(2)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: width - 20,
        marginRight: 'auto',
        marginLeft: 'auto',
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

export default SignupScreen;