import React from 'react';
import {TouchableOpacity, SafeAreaView, Text, StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  text: {
    fontSize: 16,
    color: "#343434"
  },
  separator: {
    backgroundColor: "#e2e2e2",
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
});

const Options = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Example</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Options;