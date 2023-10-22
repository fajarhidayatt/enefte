import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, style} from '@utils';
import {useNavigationProps} from '@types';
import {Button, Spacer} from '@components';
import {LogoPrimary} from '@assets/vectors';

const StartedScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View style={[style.layout.page, style.layout.px24, style.layout.between]}>
      <View>
        <Spacer height={48} />
        <LogoPrimary />
        <View style={[styles.circle, styles.circleSecondary]} />
        <View style={[styles.circle, styles.circlePrimary]} />
      </View>
      <View>
        <View style={style.layout.gap24}>
          <Text style={[style.text.h1, style.text.white]}>
            {'All NFTs are\ncertifiably unique\nand ownable'}
          </Text>
          <Text style={[style.text.body, style.text.gray]}>
            A credible and excellent marketplace for non-fungible token.
          </Text>
        </View>
        <Spacer height={110} />
        <View
          style={[
            style.layout.row,
            style.layout.alignCenter,
            style.layout.gap16,
            style.layout.py24,
          ]}>
          <View style={style.layout.flex1}>
            <Button
              text="Connect with Wallet"
              onPress={() => navigation.navigate('ConnectWallet')}
            />
          </View>
          <Button
            icon="chevron-right"
            size="small"
            outline="outlineWhite"
            background="bgNone"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'MainApp'}],
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default StartedScreen;

const styles = StyleSheet.create({
  circle: {
    width: 255,
    height: 255,
    borderRadius: 255,
    borderWidth: 2,
    position: 'absolute',
    zIndex: -1,
  },
  circlePrimary: {
    borderColor: colors.primary,
    top: -69,
    left: -56,
  },
  circleSecondary: {
    borderColor: colors.secondary,
    top: -40,
    left: -76,
  },
});
