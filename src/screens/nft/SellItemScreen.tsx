import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, style} from '@utils';
import {useNavigationProps} from '@types';
import {Button, Header, InputText, Option} from '@components';
import {IcEthereum, IcPhoneTime, IcPriceTag} from '@assets/vectors';

const SellItemScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View style={style.layout.page}>
      <Header title="Sell Items" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={[style.layout.gap24, style.layout.px24]}>
        <View style={[style.layout.row, style.layout.gap16]}>
          <TouchableOpacity style={[styles.bigButton, style.layout.bgPrimary]}>
            <IcPriceTag width={48} height={48} fill={colors.white} />
            <Text style={[style.text.button, style.text.light]}>
              Fixed Price
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bigButton, style.layout.bgSecondary]}>
            <IcPhoneTime width={48} height={48} fill={colors.gray} />
            <Text style={[style.text.button, style.text.gray]}>
              Timed Auction
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.layout.gap8}>
          <View style={[style.layout.row, style.layout.gap24]}>
            <Option text="ETH" />
            <View style={style.layout.flex1}>
              <InputText placeholder="Price" />
            </View>
          </View>
          <Text style={[style.text.smallCaption, style.text.gray]}>$.</Text>
        </View>
        <View style={style.layout.gap8}>
          <Text style={[style.text.caption, style.text.white]}>
            Set expiration date and time
          </Text>
          <View style={[style.layout.row, style.layout.gap24]}>
            <Option text="Date" />
            <View style={style.layout.flex1}>
              <InputText placeholder="Time" />
            </View>
          </View>
        </View>
        <View style={styles.feeWrapper}>
          <Text style={[style.text.body, style.text.white]}>Fees</Text>
          <View style={[style.layout.row, style.layout.centerBetween]}>
            <Text style={[style.text.caption, style.text.gray]}>
              enefte fee
            </Text>
            <Text style={[style.text.caption, style.text.gray]}>2,50%</Text>
          </View>
          <View style={[style.layout.row, style.layout.centerBetween]}>
            <Text style={[style.text.caption, style.text.gray]}>
              Customer Royalty
            </Text>
            <Text style={[style.text.caption, style.text.gray]}>10,00%</Text>
          </View>
        </View>
        <View style={[style.layout.row, style.layout.centerBetween]}>
          <Text style={[style.text.body, style.text.white]}>
            Total Earnings
          </Text>
          <View style={[style.layout.alignEnd, style.layout.gap8]}>
            <View
              style={[
                style.layout.row,
                style.layout.center,
                style.layout.gap16,
              ]}>
              <IcEthereum width={15} height={25} />
              <Text style={[style.text.h2, style.text.light]}>0,875</Text>
            </View>
            <Text style={[style.text.caption, style.text.gray]}>
              ($1,759.20)
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={[style.layout.px24, style.layout.py24]}>
        <Button text="Next" onPress={() => navigation.navigate('SellFinish')} />
      </View>
    </View>
  );
};

export default SellItemScreen;

const styles = StyleSheet.create({
  bigButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feeWrapper: {
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
    rowGap: 8,
    paddingTop: 24,
  },
});
