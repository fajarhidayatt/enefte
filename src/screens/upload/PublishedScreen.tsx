import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, style} from '@utils';
import {Button, Spacer} from '@components';
import {published} from '@assets/images';
import {useNavigationProps} from '@types';
import {useNavigation} from '@react-navigation/native';
import {IcInstagram, IcLine, IcTwitter, IcWhatsapp} from '@assets/vectors';

const PublishedScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View
      style={[
        style.layout.page,
        style.layout.justifyCenter,
        style.layout.px24,
      ]}>
      <View style={style.layout.gap32}>
        <View>
          <Image source={published} style={styles.image} />
        </View>
        <View style={[style.layout.alignCenter, style.layout.gap8]}>
          <Text style={[style.text.h1, style.text.white]}>Hurrah</Text>
          <Text style={[style.text.body, style.text.white]}>
            Your NFT Published
          </Text>
        </View>
        <View style={style.layout.gap16}>
          <Text style={[style.text.body, style.text.white, style.text.center]}>
            Share
          </Text>
          <View
            style={[style.layout.row, style.layout.center, style.layout.gap24]}>
            <IcInstagram width={32} height={32} fill={colors.gray} />
            <IcTwitter width={32} height={32} fill={colors.gray} />
            <IcWhatsapp width={32} height={32} fill={colors.gray} />
            <IcLine width={32} height={32} />
          </View>
        </View>
      </View>
      <Spacer height={72} />
      <Button
        text="Back to Home"
        onPress={() => navigation.navigate('MainApp')}
      />
    </View>
  );
};

export default PublishedScreen;

const styles = StyleSheet.create({
  image: {
    width: 207,
    height: 181,
    alignSelf: 'center',
  },
});
