import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Dimensions,
  ScrollView,
} from 'react-native';
import {colors, style} from '@utils';
import Button from '../Button/Button';
import InputText from '../Input/InputText';

interface BottomSheetProps {
  visible: boolean;
  onDismiss: () => void;
  onSubmit?: () => void;
}

const {height} = Dimensions.get('window');
const BottomSheet = ({visible = false, onDismiss}: BottomSheetProps) => {
  return (
    <Modal visible={visible} transparent>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Pressable onPress={onDismiss}>
          <View style={styles.dismissArea} />
        </Pressable>
        <View style={styles.bottomSheet}>
          <View style={style.layout.gap16}>
            <Text style={[style.text.h2, style.text.light]}>
              Enter ethereum address
            </Text>
            <InputText placeholder="Address" outline withLabel />
          </View>
          <View>
            <Button text="Confirm" onPress={onDismiss} />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(37,51,65,0.5)',
  },
  dismissArea: {
    height: height * 0.6,
  },
  bottomSheet: {
    height: height * 0.4,
    backgroundColor: colors.dark,
    paddingTop: 44,
    paddingHorizontal: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    gap: 40,
  },
});
