import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import colors from '../theme/colors';
import Text from './Text';

const SectionTitle = (props: {text: string; style?: ViewStyle}) => {
  return (
    <View style={[styles.main, props.style]}>
      <View style={styles.line} />
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    marginTop: 0,
  },
  text: {
    fontSize: 17,
    marginHorizontal: 10,
    color: colors.text2,
  },
  line: {
    height: 1,
    backgroundColor: colors.text2,
    flex: 1,
    marginTop: 5,
  },
});
