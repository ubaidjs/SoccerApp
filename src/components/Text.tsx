import React from 'react';
import {StyleSheet, Text as TextNative, TextProps} from 'react-native';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

const Text = (props: TextProps) => {
  return (
    <TextNative {...props} style={[styles.default, props.style]}>
      {props.children}
    </TextNative>
  );
};

export default Text;

const styles = StyleSheet.create({
  default: {
    color: colors.text,
    fontFamily: fonts.regular,
  },
});
