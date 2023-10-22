import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {style} from '@utils';

interface CategoryCardProps {
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const CategoryCard = ({title, image, onPress}: CategoryCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} />
      <View style={styles.textWrapper}>
        <Text style={[style.text.button, style.text.light]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textWrapper: {
    backgroundColor: 'rgba(49, 59, 69, 0.4)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
