import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

// StatusBar is clock, wifi and battery symbols. They are prebuilt dark and light

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  }
})

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    </View>
  )
};