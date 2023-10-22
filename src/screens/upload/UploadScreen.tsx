import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, style} from '@utils';
import {useNavigationProps} from '@types';
import {Button, Header, InputText, Spacer} from '@components';
import {IcUploadCloud} from '@assets/vectors';

const UploadScreen = () => {
  const navigation = useNavigation<useNavigationProps>();

  return (
    <View style={style.layout.page}>
      <Header title="Upload Items" />
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.layout.px24}>
        <View style={style.layout.gap8}>
          <Text style={[style.text.body, style.text.white]}>
            Upload new items*
          </Text>
          <Text style={[style.text.caption, style.text.gray]}>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF, Max size: 40 MB
          </Text>
          <View style={[style.layout.center, styles.uploadWrapper]}>
            <IcUploadCloud width={63} height={63} stroke={colors.gray} />
            <Text style={[style.text.body, style.text.gray]}>
              Upload your NFT
            </Text>
          </View>
        </View>
        <Spacer height={20} />
        <View style={style.layout.gap24}>
          <InputText placeholder="Name" />
          <View style={style.layout.gap8}>
            <InputText placeholder="External Link" />
            <Text>
              <Text style={[style.text.smallCaption, style.text.gray]}>
                enefte will include a link to this URL on this itern's detail
                page, so that users can click to learn more about it. You are
                welcome to link to your own webpage with more details.
              </Text>
            </Text>
          </View>
          <InputText placeholder="Bio" multiLine />
        </View>
      </ScrollView>
      <View style={[style.layout.px24, style.layout.py24]}>
        <Button text="Next" onPress={() => navigation.navigate('SetItem')} />
      </View>
    </View>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  uploadWrapper: {
    width: '100%',
    height: 168,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    borderStyle: 'dashed',
  },
});
