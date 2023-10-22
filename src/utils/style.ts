import colors from './colors';
import fonts from './fonts';
import {StyleSheet} from 'react-native';

const text = StyleSheet.create({
  h1: {
    fontFamily: fonts.primary.bold,
    fontSize: 34,
    lineHeight: 42.5,
  },
  h2: {
    fontFamily: fonts.primary.bold,
    fontSize: 24,
  },
  body: {
    fontFamily: fonts.primary.medium,
    fontSize: 16,
    lineHeight: 20,
  },
  button: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
  },
  caption: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    lineHeight: 16,
  },
  smallCaption: {
    fontFamily: fonts.primary.light,
    fontSize: 10,
  },

  blue: {color: colors.primary},
  white: {color: colors.white},
  light: {color: colors.light},
  dark: {color: colors.dark},
  gray: {color: colors.gray},
  green: {color: colors.success},

  center: {textAlign: 'center'},
});

const layout = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.dark,
  },

  flex1: {flex: 1},
  flex2: {flex: 2},

  gap4: {gap: 4},
  gap8: {gap: 8},
  gap12: {gap: 12},
  gap16: {gap: 16},
  gap24: {gap: 24},
  gap32: {gap: 32},
  gap36: {gap: 36},
  gap64: {gap: 64},

  row: {flexDirection: 'row'},
  wrap: {flexWrap: 'wrap'},

  center: {alignItems: 'center', justifyContent: 'center'},
  centerBetween: {alignItems: 'center', justifyContent: 'space-between'},
  between: {justifyContent: 'space-between'},
  justifyAround: {justifyContent: 'space-around'},
  justifyCenter: {justifyContent: 'center'},
  justifyEnd: {justifyContent: 'flex-end'},
  alignStart: {alignItems: 'flex-start'},
  alignCenter: {alignItems: 'center'},
  alignEnd: {alignItems: 'flex-end'},

  radius10: {borderRadius: 10},

  px8: {paddingHorizontal: 8},
  py8: {paddingVertical: 8},
  px12: {paddingHorizontal: 12},
  py12: {paddingVertical: 12},
  px16: {paddingHorizontal: 16},
  py16: {paddingVertical: 16},
  px24: {paddingHorizontal: 24},
  py24: {paddingVertical: 24},
  px32: {paddingHorizontal: 32},
  py32: {paddingVertical: 32},

  bgdark: {backgroundColor: colors.dark},
  bgSecondary: {backgroundColor: colors.secondary},
  bgPrimary: {backgroundColor: colors.primary},
});

const button = StyleSheet.create({
  large: {paddingVertical: 16, paddingHorizontal: 32},
  medium: {paddingVertical: 14, paddingHorizontal: 28},
  small: {paddingVertical: 10, paddingHorizontal: 20},

  bgNone: {backgroundColor: 'transparent'},
  bgPrimary: {backgroundColor: colors.primary},
  bgSecondary: {backgroundColor: colors.secondary},

  outlineNone: {borderWidth: 0},
  outlineWhite: {borderWidth: 1, borderColor: colors.white},
  outlineBlue: {borderWidth: 1, borderColor: colors.primary},
});

const image = StyleSheet.create({
  round32: {width: 32, height: 32, borderRadius: 32},
  round40: {width: 40, height: 40, borderRadius: 40},
  round44: {width: 44, height: 44, borderRadius: 44},
  round52: {width: 52, height: 52, borderRadius: 52},
  round66: {width: 66, height: 66, borderRadius: 66},
  round88: {width: 88, height: 88, borderRadius: 88},
  round148: {width: 148, height: 148, borderRadius: 148},

  img207: {width: 207, height: 207, resizeMode: 'contain'},
});

const style = {
  text,
  layout,
  button,
  image,
};

export default style;
