import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Imported utilities
import { Input, Logo } from '../../../components';
import { height, width } from '../../../utils/dimension';
import {darkGreen, black, medBlack, white, lightGreen, darkerGreen} from '../../../utils/colors';

//Imported components
import FormTitle from './FormTitle';
import Button from './Button';

function SignupScreen() {
    const [fullname, setFullname] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const submit = () => {
        console.log(fullname, email, password)
    }

    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.Form}>
                <FormTitle />
                <Input label='Fullname' type='default' secure={false} onChange={(e) => setFullname(e)} />
                <Input label='Email' type={'email-address'} secure={false} onChange={(e) => setEmail(e)} />
                <Input label='Password' type={'default'} secure onChange={(e) => setPassword(e)} />
                <Button title='Continue' onClick={() => submit()} />
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