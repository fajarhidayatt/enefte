import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, style} from '@utils';
import {IcChevronDown} from '@assets/vectors';

const Option = ({text}: {text: string}) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={styles.container}>
      <Text style={[style.text.body, style.text.gray]}>{text}</Text>
      <IcChevronDown fill={colors.gray} />
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingLeft: 24,
    paddingRight: 12,
    borderRadius: 10,
  },
});
