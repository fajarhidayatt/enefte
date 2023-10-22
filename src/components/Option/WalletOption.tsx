import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {style} from '@utils';

interface WalletOptionProps {
  text: string;
  image: ImageSourcePropType;
  onPress?: () => void;
}

const WalletOption = ({text, image, onPress}: WalletOptionProps) => {
  return (
    <TouchableOpacity
      style={[
        style.layout.row,
        style.layout.alignCenter,
        style.layout.gap12,
        style.layout.py12,
        style.layout.px24,
        style.layout.bgSecondary,
        style.layout.radius10,
      ]}
      onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={[style.text.button, style.text.white]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default WalletOption;

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});
