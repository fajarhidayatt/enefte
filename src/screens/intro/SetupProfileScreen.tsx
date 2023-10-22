import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {style} from '@utils';
import {useNavigationProps} from '@types';
import {Button, Header, InputText} from '@components';

const SetupProfileScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View style={style.layout.page}>
      <Header title="Setup Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={[style.layout.gap32, style.layout.px24]}>
        <View style={style.layout.gap16}>
          <Text style={[style.text.body, style.text.light]}>
            Upload Photo Profile
          </Text>
          <View style={[style.layout.row, style.layout.centerBetween]}>
            <Image
              source={require('@assets/dummy/profil_pic.png')}
              style={style.image.round148}
              resizeMode="cover"
            />
            <Button
              text="Upload Profile"
              onPress={() => {}}
              outline="outlineWhite"
              background="bgNone"
            />
          </View>
        </View>
        <View style={style.layout.gap32}>
          <InputText placeholder="Username" withLabel />
          <InputText placeholder="Email" withLabel />
          <InputText placeholder="Bio" multiLine withLabel />
        </View>
      </ScrollView>
      <View style={[style.layout.px24, style.layout.py24]}>
        <Button text="Submit" onPress={() => navigation.navigate('Welcome')} />
      </View>
    </View>
  );
};

export default SetupProfileScreen;
