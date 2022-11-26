import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';

interface Props {
  home: string;
  label: string;
  away: string;
}

const StatItem = (props: Props) => {
  return (
    <View style={styles.statWrap}>
      <View>
        <Text>{props.home}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.statText}>{props.label}</Text>
      </View>
      <View>
        <Text>{props.away}</Text>
      </View>
    </View>
  );
};

export default StatItem;

const styles = StyleSheet.create({
  statWrap: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  statText: {
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
