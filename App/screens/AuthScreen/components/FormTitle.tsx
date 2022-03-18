import React, {FC} from 'react';
import { Text, View , StyleSheet} from 'react-native';

//Imported utilities
import { black, darkGreen } from '../../../utils/colors';

interface FormTitleProps{
    name: string
}

const FormTitle:FC<FormTitleProps> = ({name}):JSX.Element => {
    return (
        <View>
            <Text style={styles.mainText}>{name}</Text>
            <View style={styles.mainline} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: black
    },
    mainline: {
        height: 3,
        width: 90,
        backgroundColor: darkGreen,
        borderRadius: 2,
        marginTop: 7
    }
})

export default FormTitle;