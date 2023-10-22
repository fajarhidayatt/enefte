import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, style} from '@utils';
import Spacer from '../Spacer/Spacer';

interface InputTextProps {
  placeholder: string;
  outline?: boolean;
  withLabel?: boolean;
  multiLine?: boolean;
  numberOfLines?: number;
}

const InputText = ({
  placeholder,
  outline = false,
  withLabel = false,
  multiLine = false,
  numberOfLines = 5,
}: InputTextProps) => {
  const textStyle = withLabel ? style.text.caption : style.text.body;
  const containerBorder = {
    borderColor: outline ? colors.white : 'transparent',
  };

  return (
    <View style={[styles.container, containerBorder]}>
      {withLabel ? (
        <Text style={[style.text.smallCaption, style.text.gray]}>
          {placeholder}
        </Text>
      ) : null}
      {multiLine ? <Spacer height={6} /> : null}
      <TextInput
        style={[textStyle, style.text.white, styles.input]}
        placeholder={!withLabel ? placeholder : ''}
        placeholderTextColor={colors.gray}
        multiline={multiLine}
        numberOfLines={multiLine ? numberOfLines : 1}
        textAlignVertical={multiLine ? 'top' : 'center'}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  input: {
    padding: 0,
  },
});
