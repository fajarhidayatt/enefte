import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '@utils';
import {useNavigationProps} from '@types';
import {BottomSheet, Button, Header, WalletOption} from '@components';
import {imgAddress, imgMeta, imgTrust, wallet} from '@assets/images';

const ConnectWalletScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View style={style.layout.page}>
      <Header title="logo" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={[style.layout.px24, style.layout.gap32]}>
        <View style={[style.layout.center, style.layout.gap16]}>
          <Image source={wallet} style={style.image.img207} />
          <Text style={[style.text.h1, style.text.white, style.text.center]}>
            Choose your wallet
          </Text>
          <Text style={[style.text.body, style.text.gray, style.text.center]}>
            By connecting your wallet you agree to{'\n'}our{' '}
            <Text style={style.text.white}>Terms of Service</Text> and{' '}
            <Text style={style.text.white}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={style.layout.gap16}>
          <WalletOption text="MetaMask" image={imgMeta} />
          <WalletOption text="Trust Wallet" image={imgTrust} />
          <WalletOption
            text="Enter ethereum address"
            image={imgAddress}
            onPress={() => setVisible(true)}
          />
        </View>
      </ScrollView>
      <View style={[style.layout.px24, style.layout.py24]}>
        <Button
          text="Continue"
          onPress={() => navigation.navigate('SetupProfile')}
        />
      </View>
      <BottomSheet visible={visible} onDismiss={() => setVisible(false)} />
    </View>
  );
};

export default ConnectWalletScreen;
