import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors, style} from '@utils';
import Button from '../Button/Button';

interface BoardLayerProps {
  idx: number;
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const {width, height} = Dimensions.get('window');
const BoardLayer = ({idx, title, image, onPress}: BoardLayerProps) => {
  return (
    <View style={style.layout.flex1}>
      <View style={[styles.topPage, style.layout.center]}>
        <Image source={image} style={style.image.img207} />
      </View>
      <View
        style={[
          styles.bottomPage,
          style.layout.flex1,
          style.layout.between,
          style.layout.bgSecondary,
          style.layout.px24,
        ]}>
        <View style={style.layout.gap16}>
          <Text style={[style.text.h1, style.text.white, style.text.center]}>
            {title}
          </Text>
          <Text style={[style.text.body, style.text.light, style.text.center]}>
            Buy and sell digital items
          </Text>
          <View
            style={[style.layout.row, style.layout.center, style.layout.gap8]}>
            {[1, 2, 3].map(item => (
              <View
                key={item}
                style={[
                  styles.bullet,
                  {
                    backgroundColor: item === idx ? colors.white : colors.dark,
                  },
                ]}
              />
            ))}
          </View>
        </View>
        <View style={style.layout.py24}>
          <Button text="Next" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default BoardLayer;

const styles = StyleSheet.create({
  topPage: {
    width: width,
    height: height * 0.55,
  },
  bottomPage: {
    paddingTop: 42,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 8,
  },
});
