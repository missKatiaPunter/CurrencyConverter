import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  title: {
    color: colors.text,
    fontSize: 16,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export const RowItem = (props) => {
  const { rightIcon, title, onPress } = props;
  return(
    <TouchableOpacity
      style={styles.row}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
      { rightIcon }
    </TouchableOpacity>
  )
};

export const RowSeparator = () => <View style={styles.separator} />;