import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, width} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  imgStyle: {
    height: moderateScale(240),
    width: width,
  },
  imgStyle2: {
    tintColor: '#8A8A99',
    height: moderateScale(24),
    width: moderateScale(24),
    paddingLeft: moderateScale(4),
    alignSelf: 'center',
  },
  textStyle: {
    ...commonStyles.fontBold24,
    color: colors._050533,
    marginTop: moderateScale(32),
    marginLeft: moderateScale(16),
  },
  textStyle2: {
    ...commonStyles.fontBold14,
    marginTop: moderateScale(8),
    marginLeft: moderateScale(16),
    color: colors._626273,
  },
  texStyle3: {
    ...commonStyles.fontBold16,
    color: '#050533',
  },
  textStyle4: {
    ...commonStyles.fontBold16,
    color: colors._F5F5FC,
    alignSelf: 'center',
  },
  textStyle5: {
    color: '#507ba2',
    top: 30,
    marginRight: 24,
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputStyle: {
    ...commonStyles.fontBold16,
    height: 40,
    alignSelf: 'center',
    color: '#050533',
    marginTop: 4,
    flex: 1,
  },
  viewStyle: {
    height: moderateScale(48),
    borderRadius: moderateScale(8),
    backgroundColor: colors._E8E9F5,
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(24),
    paddingLeft: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle2: {
    height: moderateScale(18),
    width: moderateScale(1),
    backgroundColor: colors._626273,
    marginHorizontal: moderateScale(8),
  },


  touchStyle: {
    height: moderateScale(48),
    backgroundColor: colors._5C5DFF,
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  backimg: {
    marginTop: moderateScale(58),
    marginLeft: moderateScale(23),
  },
  textStyle9: {
    ...commonStyles.fontBold16,
    color: colors._F5F5FC,
    alignSelf: 'center',
  },
  textStyle8: {
    ...commonStyles.fontBold14,
    color: colors._626273,
    marginTop: moderateScale(8),
  },
  textStyle6: {
    ...commonStyles.fontBold16,
    color: colors._5C5DFF,
    marginRight: moderateScale(16),
    marginTop: moderateScale(8),
  },
  textStyle7: {
    ...commonStyles.fontBold14,
    color: colors._5C5DFF,
    marginRight: moderateScale(16),
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
    marginTop: moderateScale(8),
    marginBottom: moderateScale(24),
  },
  viewStyle4: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: moderateScale(16),
    marginTop: moderateScale(8),
  },
 
});
export default styles;
