import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, style} from '@utils';
import {useNavigationProps} from '@types';
import {Button, StatsItem} from '@components';
import {IcCheck} from '@assets/vectors';

const Stepper = () => {
  return (
    <View style={[style.layout.row, style.layout.center, style.layout.gap64]}>
      <View
        style={[
          styles.bulletWrapper,
          {borderColor: colors.primary, backgroundColor: colors.success},
        ]}>
        <IcCheck width={24} height={24} stroke={colors.white} />
      </View>
      <View style={[styles.line, {left: 64}]} />
      <View
        style={[
          styles.bulletWrapper,
          {borderColor: colors.primary, backgroundColor: colors.primary},
        ]}>
        <Text style={[style.text.h2, style.text.light]}>2</Text>
      </View>
      <View style={[styles.line, {right: 64}]} />
      <View
        style={[
          styles.bulletWrapper,
          {borderColor: colors.gray, backgroundColor: colors.dark},
        ]}>
        <Text style={[style.text.h2, style.text.gray]}>3</Text>
      </View>
    </View>
  );
};

const CompleteScreen = () => {
  const navigation = useNavigation<useNavigationProps>();
  const stat = {
    author: {
      profilPic: require('src/assets/dummy/user_4.png'),
      username: 'Smith Half',
      nickName: 'smithhh_',
      isVerified: false,
    },
    balance: 827123.5,
    statsBalance: '28,9%',
    stats: '7,81%',
    price: '72,14',
    owner: '72,9',
    items: '82,1',
    time: 10,
    nftName: 'CloneX #1822',
    nftImage: require('src/assets/dummy/nft_2.png'),
  };

  return (
    <View style={[style.layout.page, style.layout.px24]}>
      <View style={styles.headerWrapper}>
        <Text style={[style.text.h2, style.text.white]}>Complete Listing</Text>
      </View>
      <View style={[style.layout.flex1, style.layout.gap64]}>
        <View>
          <Stepper />
        </View>
        <View style={[style.layout.alignCenter, style.layout.gap16]}>
          <Text style={[style.text.h2, style.text.light]}>Approve Token</Text>
          <Text
            style={[style.text.caption, style.text.gray, style.text.center]}>
            To get set up for auction listings for the first time, you must
            approve the taken for trading, which requires a one-time gas fee
          </Text>
          <Text style={[style.text.caption, style.text.blue]}>
            View on Etherscan
          </Text>
        </View>
        <View style={style.layout.gap16}>
          <StatsItem type="secondary" desc={false} stat={stat} />
          <Text style={[style.text.caption, style.text.gray]}>
            Your wallet balance is below 0.05 ETH. The next stops require small
            transaction fees, so you may have to deposit additional funds to
            complete them.
          </Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          text="Complete Listing"
          onPress={() => navigation.navigate('Published')}
        />
      </View>
    </View>
  );
};

export default CompleteScreen;

const styles = StyleSheet.create({
  headerWrapper: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  bulletWrapper: {
    width: 46,
    height: 46,
    borderRadius: 46,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    width: 110,
    height: 2,
    backgroundColor: colors.primary,
    zIndex: -1,
  },
  buttonWrapper: {
    marginBottom: 32,
  },
});
