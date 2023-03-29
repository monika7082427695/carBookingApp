import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {moderateScale, width} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  backgroundimgStyle: {
    height: moderateScale(468),
    width: width,
  },
  imgStyle2: {
    height: moderateScale(24),
    width: moderateScale(24),
    tintColor: 'white',
    marginRight: moderateScale(4),
  },
  viewStyle: {
    flexDirection: 'row',
    marginTop: moderateScale(56),
    justifyContent: 'flex-end',
  },
  textStyle: {
    ...commonStyles.fontBold14,
    color: colors._F5F5FC,
    marginRight: moderateScale(16),
  },
  textStyle2: {
    ...commonStyles.fontBold24,
    color: colors._050533,
 marginTop: moderateScale(64),
    textAlign: 'center',

   
  },
  textStyle3: {
    ...commonStyles.fontBold14,
    color: colors._F5F5FC,
    
    
  },
  subTitleStyle: {
    ...commonStyles.fontBold14,
    marginTop: moderateScale(16),
    color: colors._626273,
   textAlign: 'center',
  },
  touchStyle: {
    height: moderateScale(48),
    backgroundColor: colors._5C5DFF,
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
     alignItems:'center',
    justifyContent:'center',
    marginBottom:moderateScale(10)
   
  },
});

export default styles;
