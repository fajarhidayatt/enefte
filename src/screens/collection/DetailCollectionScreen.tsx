import React, {FC} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {PageProps} from '@types';
import {colors, style} from '@utils';
import {Header, Profile, Spacer} from '@components';
import {
  IcDiscrod,
  IcEthereum,
  IcInstagram,
  IcTwitter,
  IcWeb,
} from '@assets/vectors';
import TabViewSection from './TabViewSection';

const DetailCollectionScreen: FC<PageProps<'DetailColletion'>> = ({route}) => {
  const {collection} = route.params;

  return (
    <View style={[style.layout.page]}>
      <ImageBackground source={collection.image} style={styles.imageBanner}>
        <Header leading="dark" action={['share']} />
      </ImageBackground>
      <Spacer height={18} />
      <View style={style.layout.px24}>
        <View style={[style.layout.row, style.layout.centerBetween]}>
          <View>
            <View style={styles.profilePicWrapper}>
              <Profile
                image={collection.author.profilPic}
                sizeImage="round88"
                isVerified={collection.author.isVerified}
              />
            </View>
          </View>
          <View>
            <View
              style={[
                style.layout.row,
                style.layout.center,
                style.layout.gap16,
              ]}>
              <IcWeb width={24} height={24} fill={colors.gray} />
              <IcInstagram width={24} height={24} fill={colors.gray} />
              <IcTwitter width={24} height={24} fill={colors.gray} />
              <IcDiscrod width={24} height={24} fill={colors.gray} />
            </View>
          </View>
        </View>
        <View style={style.layout.gap8}>
          <Text style={[style.text.h1, style.text.white]}>
            {collection.author.username}
          </Text>
          <Text style={[style.text.caption, style.text.gray]}>
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the drab reality and enter the world of Karafuru by
            Museum of Toys.
          </Text>
        </View>
        <View
          style={[style.layout.row, style.layout.between, styles.infoWrapper]}>
          <View style={style.layout.center}>
            <Text style={[style.text.caption, style.text.gray]}>Items</Text>
            <Text style={[style.text.body, style.text.light]}>11,3%</Text>
          </View>
          <View style={style.layout.center}>
            <Text style={[style.text.caption, style.text.gray]}>Owners</Text>
            <Text style={[style.text.body, style.text.light]}>6,38K</Text>
          </View>
          <View style={style.layout.center}>
            <Text style={[style.text.caption, style.text.gray]}>
              Floor Price
            </Text>
            <View
              style={[
                style.layout.row,
                style.layout.alignCenter,
                style.layout.gap8,
              ]}>
              <IcEthereum width={8} height={12} />
              <Text style={[style.text.body, style.text.light]}>96,68</Text>
            </View>
          </View>
          <View style={style.layout.center}>
            <Text style={[style.text.caption, style.text.gray]}>
              Volume Trade
            </Text>
            <View
              style={[
                style.layout.row,
                style.layout.alignCenter,
                style.layout.gap8,
              ]}>
              <IcEthereum width={8} height={12} />
              <Text style={[style.text.body, style.text.light]}>96,68</Text>
            </View>
          </View>
        </View>
      </View>
      <TabViewSection />
    </View>
  );
};

export default DetailCollectionScreen;

const styles = StyleSheet.create({
  imageBanner: {
    height: 200,
  },
  profilePicWrapper: {
    position: 'absolute',
    top: -85,
  },
  infoWrapper: {
    backgroundColor: colors.secondary,
    padding: 16,
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 32,
  },
});
