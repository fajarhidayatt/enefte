import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors, style} from '@utils';
import {Header, InputText} from '@components';
import {IcAddPhoto} from '@assets/vectors';

const EditProfileScreen = () => {
  return (
    <View style={[style.layout.flex1, style.layout.bgdark]}>
      <Header action={['btn-Save Changes']} />
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <ImageBackground
          source={require('@assets/dummy/profil_banner.png')}
          style={styles.imageBanner}
          resizeMode="cover">
          <View style={[style.layout.center, styles.bannerOverlay]}>
            <IcAddPhoto width={52} height={52} fill={colors.white} />
          </View>
        </ImageBackground>
        <View style={styles.mainWrapper}>
          <View style={styles.profilePicWrapper}>
            <Image
              source={require('@assets/dummy/profil_pic.png')}
              style={styles.profilePic}
            />
            <View style={[style.layout.center, styles.profileOverlay]}>
              <IcAddPhoto width={32} height={32} fill={colors.white} />
            </View>
          </View>
          <View style={style.layout.gap16}>
            <InputText placeholder="Username" withLabel />
            <InputText placeholder="Email" withLabel />
            <InputText placeholder="Bio" withLabel multiLine />
          </View>
          <View style={style.layout.gap16}>
            <Text style={[style.text.body, style.text.white]}>Links</Text>
            <InputText placeholder="Twitter" withLabel />
            <InputText placeholder="Instagram" withLabel />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  imageBanner: {
    height: 200,
  },
  bannerOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  mainWrapper: {
    marginTop: -40,
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 24,
  },
  profilePicWrapper: {
    width: 109,
    height: 109,
    borderRadius: 109,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: 'hidden',
  },
  profilePic: {
    width: 109,
    height: 109,
    resizeMode: 'cover',
  },
  profileOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
});
