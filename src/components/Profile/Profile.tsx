import React from 'react';
import {StyleSheet, View, Text, Image, ImageSourcePropType} from 'react-native';
import {colors, style} from '@utils';
import {IcVerified} from '@assets/vectors';

type TStyle = 'body' | 'button' | 'caption' | 'smallCaption';
type TColor = 'light' | 'white' | 'gray';
type TSizeImage = 'round32' | 'round40' | 'round44' | 'round66' | 'round88';

const verified: Record<TSizeImage, number> = {
  round32: 6,
  round40: 8,
  round44: 10,
  round66: 16,
  round88: 22,
};

interface ProfileProps {
  image: ImageSourcePropType;
  sizeImage: TSizeImage;
  title?: string;
  titleStyle?: TStyle;
  titleColor?: TColor;
  desc?: string;
  descStyle?: TStyle;
  descColor?: TColor;
  num?: number;
  isVerified?: boolean;
}

const Profile = ({
  image,
  sizeImage,
  title,
  titleStyle = 'smallCaption',
  titleColor = 'white',
  desc,
  descStyle = 'smallCaption',
  descColor = 'white',
  num,
  isVerified = false,
}: ProfileProps) => {
  return (
    <View
      style={[style.layout.row, style.layout.alignCenter, style.layout.gap8]}>
      <View>
        <Image
          source={image}
          style={style.image[sizeImage]}
          resizeMode="cover"
        />
        {isVerified ? (
          <View style={[styles.verifiedWrapper]}>
            <IcVerified
              width={verified[sizeImage]}
              height={verified[sizeImage]}
            />
          </View>
        ) : null}
        {num ? (
          <View style={styles.numWrapper}>
            <Text style={[style.text.smallCaption, style.text.dark]}>
              {num}
            </Text>
          </View>
        ) : null}
      </View>
      {title || desc ? (
        <View style={[style.layout.gap4]}>
          {title ? (
            <Text style={[style.text[titleStyle], style.text[titleColor]]}>
              {title}
            </Text>
          ) : null}
          {desc ? (
            <Text style={[style.text[descStyle], style.text[descColor]]}>
              {desc}
            </Text>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  verifiedWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    padding: 2,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  numWrapper: {
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
