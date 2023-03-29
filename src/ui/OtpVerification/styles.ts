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
    // height: moderateScale(24),
    // width: moderateScale(24),
  },
  textStyle: {
    ...commonStyles.fontBold24,
    color: colors._050533,
    marginTop: moderateScale(24),
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
    color:colors._050533,
    // backgroundColor:'red',
    // height: moderateScale(40),
    textAlignVertical:'center',
    paddingHorizontal:0
  },
  textStyle4: {
    ...commonStyles.fontBold16,
    color: colors._F5F5FC,
    alignSelf: 'center',
  },
  textStyle5: {
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
   
  },

  inputStyle: {
    flex: 1,
    ...commonStyles.fontBold16,
    // height: moderateScale(40),
    color: colors._050533,
    // backgroundColor:'yellow',
    textAlignVertical:'center'

  },
  viewStyle: {
    height: moderateScale(48),
    borderRadius: moderateScale(8),
    backgroundColor: colors._E8E9F5,
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(24),
    paddingHorizontal: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyle2: {
    height:16,
    width: moderateScale(1),
    backgroundColor: colors._626273,
    marginHorizontal: moderateScale(8),
  },

  viewStyle4: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: moderateScale(16),
    marginTop: moderateScale(8),
  },

  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    marginTop: moderateScale(50),
  },
  touchStyle: {
    height: moderateScale(48),
    backgroundColor: colors._5C5DFF,
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',

  },
});
export default styles;
