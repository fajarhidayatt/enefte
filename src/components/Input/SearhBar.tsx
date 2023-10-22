import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, style} from '@utils';
import {IcSearch} from '@assets/vectors';
import ButtonIcon from '../Button/ButtonIcon';

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

const SearhBar = ({value, onChange, onSubmit, onClear}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <IcSearch width={24} height={23} stroke={colors.gray} />
      <TextInput
        style={[styles.input, style.text.body, style.text.light]}
        placeholder="Search your NFT..."
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        blurOnSubmit
      />
      {value.length > 0 ? (
        <ButtonIcon icon="-" color={colors.gray} onPress={onClear} />
      ) : null}
    </View>
  );
};

export default SearhBar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingLeft: 24,
    paddingRight: 14,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
    marginHorizontal: 16,
  },
});
