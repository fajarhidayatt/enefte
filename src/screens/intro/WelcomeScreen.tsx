import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '@utils';
import {Spacer} from '@components';
import {useNavigationProps} from '@types';
import {pallete} from '@assets/images';

const WelcomeScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'MainApp'}],
      });
    }, 1500);
  }, [navigation]);

  return (
    <View style={[style.layout.page, style.layout.center]}>
      <Image source={pallete} style={styles.image} />
      <Spacer height={40} />
      <View style={[style.layout.alignCenter, style.layout.gap16]}>
        <Text style={[style.text.h1, style.text.white, style.text.white]}>
          Hey! Welcome
        </Text>
        <Text style={[style.text.body, style.text.white, style.text.white]}>
          Create and Sell your NFT in 1 seconds
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 207,
    height: 190,
    resizeMode: 'contain',
  },
});
