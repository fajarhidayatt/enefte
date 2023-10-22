import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, style} from '@utils';
import {IcClose} from '@assets/vectors';

interface ModalImageProps {
  image: ImageSourcePropType;
  visible: boolean;
  onClose: () => void;
}

const {width} = Dimensions.get('window');
const ModalImage = ({image, visible, onClose}: ModalImageProps) => {
  return (
    <Modal transparent visible={visible}>
      <View
        style={[style.layout.flex1, style.layout.center, style.layout.bgdark]}>
        <TouchableOpacity style={styles.btnClose} onPress={onClose}>
          <IcClose width={40} height={40} fill={colors.white} />
        </TouchableOpacity>
        <Image source={image} style={styles.image} />
      </View>
    </Modal>
  );
};

export default ModalImage;

const styles = StyleSheet.create({
  btnClose: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  image: {
    width: width,
    height: width,
  },
});
