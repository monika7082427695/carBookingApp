import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, width} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  backimgStyle: {
    width: width,
    height: moderateScale(352),
  },
  viewStyle: {
   backgroundColor: colors._F5F5FC,
   marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(12),
     marginTop: -moderateScale(170),
    marginBottom: moderateScale(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  // viewStyle2: {
  //   height: moderateScale(40),
  //   borderWidth: moderateScale(1),
  //   marginTop: moderateScale(16),
  //   marginLeft: moderateScale(16),
  //   borderColor: colors._D7D8F5,
  //   borderRadius: moderateScale(6),
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   width:moderateScale(130)
  // },
  imgStyle: {
 
    marginLeft: moderateScale(8),
  },
  imgStyle6: {
    marginLeft: moderateScale(8),
    marginRight:moderateScale(8)
  },
  imgStyle2: {
    paddingLeft: moderateScale(8),
    alignSelf: 'center',
  },
  profileimg: {
    paddingLeft: moderateScale(8),
    alignSelf: 'center',
  },
  imgStyle3: {

    paddingRight: moderateScale(12),
    alignSelf: 'center',
  },
  imgStyle4: {
    height: moderateScale(120),
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    width:(width-32)

  },
  // dropdown: {
  //   margin: 16,
  //   alignSelf:'center',
  //   borderBottomColor: 'gray',
  //   borderBottomWidth: 0.5,
  //   paddingTop:20,
  //   height:40,

  // },
  // dropdownStyle: {
  //    height: moderateScale(40),
  //   borderWidth: moderateScale(1),
  //   marginTop: moderateScale(16),
  //   marginLeft: moderateScale(16),
  //   borderColor: colors._D7D8F5,
  //   borderRadius: moderateScale(6),
  //   // flexDirection: 'row',
  //   alignItems: 'center',
  //   width: moderateScale(130),

  // },
  placeholderStyle: {
    ...commonStyles.fontBold16,
    color: colors._5C5DFF,
    marginLeft: moderateScale(8),
  },
  selectedTextStyle: {
    color: colors._5C5DFF,
    marginLeft: moderateScale(8),
  },
  // iconStyle: {
  //   width: 24,
  //   height: 24,
  //   tintColor:'blue'
  // },
  inputSearchStyle: {
    ...commonStyles.fontBold16,
    height: moderateScale(40),
    color: colors._5C5DFF,
  },
  viewStyle3: {
    height: moderateScale(48),
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    backgroundColor: colors._E9E9F5,
    marginTop: moderateScale(16),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputStyle: {
    ...commonStyles.fontBold16,
    paddingLeft: moderateScale(16),
    flex: 1,
  },
  viewStyle4: {
    height: moderateScale(48),
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    backgroundColor: colors._E9E9F5,
    marginTop: moderateScale(16),
    justifyContent: 'center',
    flexDirection: 'row',
    width: moderateScale(147),
  },
  viewStyle6: {
    height: moderateScale(48),
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    backgroundColor: colors._E9E9F5,
    marginTop: moderateScale(16),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewStyle7: {
    height: moderateScale(48),
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
     paddingHorizontal: moderateScale(8),
    backgroundColor: colors._E9E9F5,
    marginTop: moderateScale(16),
    // justifyContent: 'center',
    flexDirection: 'row',
    width: moderateScale(147),
  },
  touchStyle: {
    height: moderateScale(48),
    backgroundColor: colors._5C5DFF,
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(16),
    // marginBottom: moderateScale(24),
  },
  textStyle4: {
    ...commonStyles.fontBold14,
    color: colors._F5F5FC,
    alignSelf: 'center',
  },
  viewStyle5: {
    marginVertical: moderateScale(16),
     marginHorizontal: moderateScale(16),
  
  },
  viewStyle6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: moderateScale(8),
    marginBottom: moderateScale(18),
  },
  textStyle7: {
    ...commonStyles.fontBold16,
    color: colors._5C5DFF,
    marginLeft: moderateScale(8),
  },
  viewStyle2: {
    height: moderateScale(40),
    borderWidth: moderateScale(1),
    marginTop: moderateScale(16),
    marginLeft: moderateScale(16),
    borderColor: colors._D7D8F5,
    borderRadius: moderateScale(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    width: moderateScale(130),
  },
  viewStyleActive: {
    height: moderateScale(8),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(8),
    backgroundColor: colors._5C5DFF,
    width: moderateScale(24),
  },
  viewStyleInactive: {
    height: moderateScale(8),
    borderRadius: moderateScale(5),
    marginLeft: moderateScale(8),
    backgroundColor: colors._9697B2,
    width: moderateScale(8),
  },
  BottomtextStyle: {
    ...commonStyles.fontBold24,
    color: colors._050533,
    marginLeft: moderateScale(16),
    marginTop: moderateScale(24),
  },
  BottomtextStyle2: {
    ...commonStyles.fontBold14,
    color: colors._626273,
    marginLeft: moderateScale(16),
    marginTop:moderateScale(16)
  },

  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    marginTop: moderateScale(50),
  },
  texStyle3: {
    ...commonStyles.fontBold16,
    alignSelf: 'center',
    color: '#050533',
  },
  viewStyle9: {
    height: moderateScale(18),
    width: moderateScale(1),
    backgroundColor: colors._626273,
    marginHorizontal: moderateScale(8),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  imgStyle5: {
    tintColor: '#8A8A99',
    height: moderateScale(24),
    width: moderateScale(24),

    alignSelf: 'center',
  },
  inputStyle2: {
    ...commonStyles.fontBold16,
    height: moderateScale(40),
    alignSelf: 'center',
    color: colors._050533,
    flex: 1,
  },
  viewStyle8: {
    height: moderateScale(48),
    borderRadius: moderateScale(8),
    backgroundColor: colors._E8E9F5,
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(54),
    paddingHorizontal: moderateScale(16),
   flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
