import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TNft} from '@types';
import {colors, style} from '@utils';
import {IcEthereum, IcLove, IcTime, IcVerified} from '@assets/vectors';
import Profile from '../Profile/Profile';

interface NftCardProps {
  item: TNft;
  size?: 'large' | 'medium';
  onPress: () => void;
}

const {width} = Dimensions.get('window');

const NftCard = ({item, size = 'large', onPress}: NftCardProps) => {
  const imageStyle = size === 'large' ? {height: 259} : {height: 144};
  const detailGap = size === 'large' ? style.layout.gap16 : style.layout.gap8;
  const containerStyle =
    size === 'large'
      ? {width: 267, padding: 16}
      : {width: width * 0.5 - 32, padding: 12};
  const bottomCardStyle =
    size === 'large'
      ? {...style.layout.row, ...style.layout.centerBetween}
      : {...style.layout.alignStart, ...style.layout.gap16};

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.75}
      onPress={onPress}>
      <View>
        <Image source={item.image} style={[styles.image, imageStyle]} />
        {size === 'large' ? (
          <View
            style={[
              style.layout.row,
              style.layout.centerBetween,
              styles.overlay,
            ]}>
            <Text style={[style.text.caption, style.text.white, styles.label]}>
              NFT
            </Text>
            <IcLove stroke={colors.secondary} />
          </View>
        ) : null}
      </View>

      <View style={detailGap}>
        <View style={[style.layout.row, style.layout.centerBetween]}>
          <View
            style={[
              style.layout.row,
              style.layout.centerBetween,
              style.layout.gap4,
            ]}>
            {size === 'large' ? (
              <Text style={[style.text.body, style.text.white]}>
                {item.name}
              </Text>
            ) : (
              <Text style={[style.text.smallCaption, style.text.gray]}>
                {item.author.nickName}
              </Text>
            )}
            {size === 'medium' && item.author.isVerified ? (
              <IcVerified width={12} height={12} />
            ) : null}
          </View>
          <View
            style={[
              style.layout.row,
              style.layout.centerBetween,
              style.layout.gap4,
            ]}>
            {size === 'large' ? (
              <IcTime
                width={14}
                height={14}
                fill={colors.gray}
                stroke={colors.gray}
              />
            ) : (
              <IcLove width={18} height={18} stroke={colors.gray} />
            )}
            <Text style={[style.text.caption, style.text.gray]}>
              {size === 'large' ? item.date : item.likes}
            </Text>
          </View>
        </View>
        <View style={bottomCardStyle}>
          {size === 'large' ? (
            <Profile
              image={item.author.profilPic}
              sizeImage="round32"
              isVerified={item.author.isVerified}
              title={item.author.nickName}
              titleStyle="smallCaption"
              titleColor="light"
            />
          ) : (
            <Text style={[[style.text.caption, style.text.light]]}>
              {item.name}
            </Text>
          )}
          <View
            style={[
              style.layout.row,
              style.layout.centerBetween,
              style.layout.gap8,
              styles.ethereumWrapper,
            ]}>
            <IcEthereum width={8} height={12} />
            {item.eth ? (
              <Text style={[style.text.smallCaption, style.text.light]}>
                {item.eth} ETH
              </Text>
            ) : null}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NftCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    gap: 24,
  },
  image: {
    width: '100%',
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  label: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(49, 59, 69, .5)',
    borderRadius: 5,
  },
  ethereumWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
