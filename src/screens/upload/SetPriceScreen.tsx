import {IcEthereum} from '@assets/vectors';
import {Button, Header, InputText, Option} from '@components';
import {useNavigation} from '@react-navigation/native';
import {useNavigationProps} from '@types';
import {colors, style} from '@utils';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const SetPriceScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View style={style.layout.page}>
      <Header title="Set Items" />
      <ScrollView
        contentContainerStyle={[style.layout.gap24, style.layout.px24]}>
        <Option text="Select Blockchain" />
        <View style={style.layout.gap8}>
          <InputText placeholder="Supply Items" withLabel />
          <Text style={[style.text.smallCaption, style.text.gray]}>
            The number of coples that can be minted. No gas cost to your
            Quantities above one coming soon
          </Text>
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
        <Button text="Next" onPress={() => navigation.navigate('Complete')} />
      </View>
    </View>
  );
};

export default SetPriceScreen;

const styles = StyleSheet.create({
  feeWrapper: {
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
    rowGap: 8,
    paddingTop: 24,
  },
});
