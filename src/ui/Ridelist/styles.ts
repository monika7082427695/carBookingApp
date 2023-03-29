import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  headerView: {
    height: moderateScale(88),
    backgroundColor: colors._5C5DFF,
    flexDirection: 'row',
    
  },
  headerimg: {
    marginLeft: moderateScale(16),
    marginTop: moderateScale(50),
  },
  container: {
    marginLeft: moderateScale(8),
    marginTop: moderateScale(40),
    justifyContent: 'center',
    
  },
  headertext: {
    ...commonStyles.fontBold16,
    color: colors._F5F5FC,
  },
  headersubtext: {
    ...commonStyles.fontBold14,
    color: colors._F5F5FC,
  },
  headerimg2: {
    marginLeft: moderateScale(8),
 
  },
  headerimg3: {
    marginRight: moderateScale(16),
    marginTop: moderateScale(44),
  },
  viewStyle: {
    backgroundColor: colors._E9E9F5,
    flex: 1,
  },
});

export default styles;
