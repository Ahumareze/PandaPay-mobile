import React, {FC} from 'react';
import { View, StyleSheet } from 'react-native';

interface PaddingProps{
    padding: number
}

const Padding:FC<PaddingProps> = ({padding}):JSX.Element => {
    return (
        <View style={[styles.container, {paddingTop: padding}]} />
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
})

export default Padding;