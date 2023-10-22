import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, style} from '@utils';
import {useNavigationProps} from '@types';
import {Button, Header, Profile, Spacer} from '@components';
import {IcCopy, IcInstagram, IcTwitter, IcWeb} from '@assets/vectors';
import TabViewSection from './TabViewSection';

const ProfileScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View style={style.layout.page}>
      <ImageBackground
        source={require('@assets/dummy/profil_banner.png')}
        style={styles.imageBanner}>
        <Header leading="dark" action={['share']} />
      </ImageBackground>
      <Spacer height={18} />
      <View style={[style.layout.px24]}>
        <View style={[style.layout.row, style.layout.centerBetween]}>
          <View>
            <View style={styles.profilePicWrapper}>
              <Profile
                image={require('@assets/dummy/profil_pic.png')}
                sizeImage="round88"
                isVerified
              />
            </View>
          </View>
          <Button
            text="Edit Profile"
            background="bgNone"
            outline="outlineWhite"
            size="small"
            onPress={() => navigation.navigate('EditProfile')}
          />
        </View>
        <View>
          <View style={style.layout.gap8}>
            <Text style={[style.text.h1, style.text.white]}>Kevin</Text>
            <View style={[style.layout.row, style.layout.centerBetween]}>
              <View
                style={[
                  style.layout.row,
                  style.layout.alignCenter,
                  style.layout.gap8,
                ]}>
                <IcCopy width={24} height={24} fill={colors.primary} />
                <Text style={[style.text.caption, style.text.gray]}>
                  0x841a...8a57
                </Text>
              </View>
              <View
                style={[
                  style.layout.row,
                  style.layout.alignCenter,
                  style.layout.gap16,
                ]}>
                <IcWeb width={24} height={24} fill={colors.gray} />
                <IcInstagram width={24} height={24} fill={colors.gray} />
                <IcTwitter width={24} height={24} fill={colors.gray} />
              </View>
            </View>
          </View>
          <Spacer height={24} />
          <Text style={[style.text.caption, style.text.gray]}>
            Sell anything
          </Text>
          <Spacer height={55} />
        </View>
        <View
          style={[
            style.layout.row,
            style.layout.alignCenter,
            style.layout.gap24,
          ]}>
          <View
            style={[
              style.layout.row,
              style.layout.alignCenter,
              style.layout.gap8,
            ]}>
            <Text style={[style.text.body, style.text.light]}>54</Text>
            <Text style={[style.text.caption, style.text.gray]}>
              Items Total
            </Text>
          </View>
          <View
            style={[
              style.layout.row,
              style.layout.alignCenter,
              style.layout.gap8,
            ]}>
            <Text style={[style.text.body, style.text.light]}>3,7K</Text>
            <Text style={[style.text.caption, style.text.gray]}>Views</Text>
          </View>
          <View
            style={[
              style.layout.row,
              style.layout.alignCenter,
              style.layout.gap8,
            ]}>
            <Text style={[style.text.body, style.text.light]}>1,2</Text>
            <Text style={[style.text.caption, style.text.gray]}>Likes</Text>
          </View>
        </View>
      </View>
      <Spacer height={32} />
      <TabViewSection />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imageBanner: {
    height: 200,
  },
  profilePicWrapper: {
    position: 'absolute',
    top: -85,
  },
});
