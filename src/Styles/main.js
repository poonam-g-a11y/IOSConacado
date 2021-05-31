import { Platform, StyleSheet, Dimensions } from 'react-native';
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_WHITE,
  COLOR_GRAY,
  COLOR_ORANGE,
  COLOR_BLACK,
  COLOR_DARK_BLUE,
  COLOR_BACKGROUND,
  COLOR_TITLE,
  COLOR_GRAY600,
  COLOR_BTN_ACCEPT
} from './colors'
import { SIZE_SMALLER, SIZE_MEDIUM, SIZE_LARGE, SIZE_SMALLER_IOS, SIZE_MEDIUM_IOS, SIZE_LARGE_IOS } from './fontSize'
import {
  FONT_REGULAR, FONT_BOLD, FONT_LIGHT
} from './../../config/constants';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  btn: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: 48,
    borderRadius: 24,
    width: '100%'
  },
  btnText: {
    fontFamily: "Gotham-Medium",
    color: COLOR_WHITE,
    fontSize: 18,
  },
  linkText: {
    textDecorationLine: "underline"
  },
  colorPrimary: {
    color: '#003B7A'
  },
  colorSecondary: {
    color: '#008BB0'
  },

  fx1: {
    flex: 1
  },
  fx2: {
    flex: 2
  },
  fx3: {
    flex: 3
  },
  fx4: {
    flex: 4
  },
  fx5: {
    flex: 5
  },
  fx6: {
    flex: 6
  },
  fx7: {
    flex: 7
  },
  fx8: {
    flex: 8
  },
  fx9: {
    flex: 9
  },
  fx10: {
    flex: 10
  },
  fxRow: {
    flexDirection: 'row'
  },
  btnLink: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: COLOR_PRIMARY
  },
  rnbttText: {
    color: COLOR_WHITE,
    fontSize: Platform.OS === 'ios' ? SIZE_SMALLER_IOS : SIZE_SMALLER
  },
  btnRounded: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  btnAccept: {
    backgroundColor: COLOR_BTN_ACCEPT
  },
  btnDarkBlue: {
    backgroundColor: COLOR_DARK_BLUE
  },
  btnPrimary: {
    backgroundColor: COLOR_PRIMARY
  },
  btnSecondary: {
    backgroundColor: COLOR_SECONDARY
  },
  btnOrange: {
    backgroundColor: COLOR_ORANGE
  },
  textWhiteBold: {
    color: COLOR_WHITE,
    fontFamily: FONT_BOLD,
    fontSize: Platform.OS === 'ios' ? SIZE_MEDIUM_IOS : SIZE_MEDIUM
  },
  textDarkBlue: {
    color: COLOR_DARK_BLUE,
    fontFamily: 'Gotham-Book',
    fontSize: Platform.OS === 'ios' ? SIZE_MEDIUM_IOS : SIZE_MEDIUM
  },
  textPrimary: {
    color: COLOR_PRIMARY,
    fontFamily: 'Gotham-Book',
    fontSize: Platform.OS === 'ios' ? SIZE_MEDIUM_IOS : SIZE_MEDIUM
  },
  textSecondary: {
    color: COLOR_SECONDARY,
    fontFamily: 'Gotham-Book',
    fontSize: Platform.OS === 'ios' ? SIZE_MEDIUM_IOS : SIZE_MEDIUM
  },
  textWhite: {
    color: COLOR_WHITE,
    fontFamily: 'Gotham-Book',
    fontSize: Platform.OS === 'ios' ? SIZE_MEDIUM_IOS : SIZE_MEDIUM
  },
  textGray: {
    color: COLOR_GRAY,
    fontFamily: 'Gotham-Book',
    fontSize: Platform.OS === 'ios' ? SIZE_MEDIUM_IOS : SIZE_MEDIUM
  },
  textGraySmall: {
    color: COLOR_GRAY,
    fontFamily: 'Gotham-Book',
    fontSize: 11
  },
  textBlack: {
    color: COLOR_BLACK,
    fontFamily: 'Gotham-Book',
    fontSize: Platform.OS === 'ios' ? SIZE_MEDIUM_IOS : SIZE_MEDIUM
  },
  textSelect: {
    fontWeight: 'bold',
    paddingRight: 25
  },
  boldblack: {
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? SIZE_MEDIUM_IOS : SIZE_MEDIUM,
    color: COLOR_BLACK,
    fontFamily: 'Gotham-Book'
  },
  titleDarkBlue: {
    color: COLOR_DARK_BLUE,
    fontSize: Platform.OS === 'ios' ? SIZE_LARGE_IOS : SIZE_LARGE,
    fontWeight: 'bold'
  },
  titlePrimary: {
    color: COLOR_PRIMARY,
    fontSize: Platform.OS === 'ios' ? SIZE_LARGE_IOS : SIZE_LARGE,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle: {
    color: COLOR_PRIMARY,
    fontSize: Platform.OS === 'ios' ? SIZE_MEDIUM_IOS : SIZE_MEDIUM,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  viewStyle: {
    backgroundColor: COLOR_WHITE
  },
  scrollViewStyle: {
    backgroundColor: COLOR_BACKGROUND,
    flex: 1
  },
  containerStyle: {
    position: 'absolute',
    right: 0
  },
  container: {
    marginBottom: 20
  },
  background: {
    backgroundColor: COLOR_BACKGROUND
  },
  title: {
    color: COLOR_TITLE
  },
  gray600: {
    color: COLOR_GRAY600
  },
  gray400: {
    color: COLOR_GRAY
  },
  /* fontBlack: {
    fontFamily: 'Gotham-Black'
  }, */
  fontBook: {
    fontFamily: 'Gotham-Book'
  },
  /* fontMedium: {
    fontFamily: 'Gotham-Medium'
  }, */
  fontBold: {
    fontFamily: 'Gotham-Bold'
  },
  fontLight: {
    fontFamily: 'Gotham-Light'
  },
  fontThin: {
    fontFamily: 'Gotham-Thin'
  },
  lineHeight: {
    lineHeight: 26
  },
  margin5: {
    margin: 5
  }
})
