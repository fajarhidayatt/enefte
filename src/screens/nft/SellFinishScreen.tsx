import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '@utils';
import {useNavigationProps} from '@types';
import {Button, Spacer} from '@components';
import {coin} from '@assets/images';

const SellFinishScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View
      style={[
        style.layout.page,
        style.layout.justifyCenter,
        style.layout.px24,
      ]}>
      <View style={style.layout.gap32}>
        <Image source={coin} style={styles.image} />
        <View style={[style.layout.alignCenter, style.layout.gap16]}>
          <Text style={[style.text.h1, style.text.white]}>Items Listed!</Text>
          <Text style={[style.text.body, style.text.white, style.text.center]}>
            Your items ready for sell
          </Text>
        </View>
      </View>
      <Spacer height={130} />
      <Button text="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SellFinishScreen;

const styles = StyleSheet.create({
  image: {
    width: 207,
    height: 181,
    alignSelf: 'center',
  },
});
