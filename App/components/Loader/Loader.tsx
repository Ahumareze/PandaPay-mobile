/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';

import LottieView from 'lottie-react-native';

import loader from '../../assets/others/spinner.json';
import { height, width } from '../../utils/dimension';
import { white } from '../../utils/colors';



const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView source={loader} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: white,
    position: 'absolute',
    top: 0,
  },
});

export default Loader;
