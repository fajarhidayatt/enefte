import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, style} from '@utils';
import {useNavigationProps} from '@types';
import {Button, Header, Option} from '@components';
import {IcPlusCircle} from '@assets/vectors';

const ListItem = () => {
  return (
    <View style={[style.layout.row, style.layout.centerBetween]}>
      <View style={[style.layout.gap8]}>
        <Text style={[style.text.body, style.text.white]}>Properties</Text>
        <Text style={[style.text.caption, style.text.gray]}>
          Textual traits that show up as rectangles
        </Text>
      </View>
      <TouchableOpacity>
        <IcPlusCircle width={38} height={38} fill={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const SetItemScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View style={style.layout.page}>
      <Header title="Set Items" />
      <ScrollView style={[style.layout.flex1, style.layout.px24]}>
        <View style={[style.layout.flex1, style.layout.gap36]}>
          <View style={style.layout.gap8}>
            <Option text="Choose Collections" />
            <Text style={[style.text.smallCaption, style.text.gray]}>
              This is the collection where your item will appear
            </Text>
          </View>
          <View style={style.layout.gap24}>
            <ListItem />
            <ListItem />
            <ListItem />
          </View>
        </View>
      </ScrollView>
      <View style={[style.layout.px24, style.layout.py24]}>
        <Button text="Next" onPress={() => navigation.navigate('SetPrice')} />
      </View>
    </View>
  );
};

export default SetItemScreen;
