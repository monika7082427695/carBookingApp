import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(88),
    backgroundColor: colors._F5F5FC,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center"
  },
  imgStyle: {
    marginTop: moderateScale(37),
    marginLeft: moderateScale(16),
    marginBottom: moderateScale(18),
  },
  textStyle: {
    ...commonStyles.fontSize20,
    color: colors._050533,
    marginTop: moderateScale(12),
    // flex:1,
    // backgroundColor:"red",
    textAlign:"center"
    
    // marginLeft: moderateScale(99),
  },
  profileimgtext: {
    ...commonStyles.fontBold18,
    color: colors._050533,
  },
  profileimgtext2: {
    ...commonStyles.fontBold14,
    color: colors._626273,
  },
  bottomview: {
    backgroundColor: colors._F5F5FC,
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24),
    marginTop:moderateScale(50),
    height: moderateScale(436),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 16,
  },
  editprofileStyle: {
    marginLeft: moderateScale(16),
    marginTop: moderateScale(16),
  },
  editTextStyle: {
    ...commonStyles.fontBold16,
    color: colors._050533,
    marginLeft: moderateScale(16),
    marginTop: moderateScale(32),
  },
  logoutBtn: {
    height: moderateScale(48),
    borderWidth: 1,
    borderRadius: moderateScale(8),
    marginHorizontal: moderateScale(24),
    borderColor:colors._FF5C5C,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:moderateScale(32)
  },
  logoutText:{
    ...commonStyles.fontBold16,
    color:colors._FF5C5C,
    marginLeft:moderateScale(8)
  }
});
export default styles;
