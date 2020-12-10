import React from 'react';
import { StatusBar, View, StyleSheet, Image, Dimensions } from 'react-native';

// StatusBar is the clock, wifi and battery symbols. They are prebuilt dark and light

import colors from '../constants/colors';

const dims = Dimensions.get("window");

console.log(dims);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer:{
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {

  },
  logo: {
    position: "absolute",
  }
})

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  )
};