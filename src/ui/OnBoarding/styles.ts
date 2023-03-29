import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  imgStyle: {
    height: moderateScale(344),
    marginTop: moderateScale(136),
    marginHorizontal: moderateScale(16),
    resizeMode: 'contain',
  },
  titleStyle: {
    ...commonStyles.fontBold24,
    color: colors._050533,
    marginTop: moderateScale(72),
    marginLeft:moderateScale(24)
  },
  subTitleStyle: {
    ...commonStyles.fontBold14,
    marginTop: moderateScale(16),
    color: colors._626273,
   marginLeft:moderateScale(24)
  },
  viewStyleActive: {
    height: moderateScale(8),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(8),
    backgroundColor:colors._5C5DFF,
    width: moderateScale(24) ,
  },
  viewStyleInactive: {
    height: moderateScale(8),
    borderRadius: moderateScale(5),
    marginLeft: moderateScale(8),
    backgroundColor: colors._D8D8E5,
    width: moderateScale(8),
  },
  viewStyle2: {
    flexDirection: 'row',
    marginTop: moderateScale(80),
    marginLeft:moderateScale(24)

  },
  touchStyle:{
    backgroundColor: colors._5C5DFF,
    width: moderateScale(92) ,
    height: moderateScale(40) ,
    flexDirection: 'row',
    borderRadius:moderateScale(6),
   paddingHorizontal:moderateScale(16),
     marginRight:moderateScale(24),
      marginTop:moderateScale(64),
      justifyContent:'center',
      alignItems:'center'
  },
  imgStyle2:{
    height: moderateScale(24) ,
     width: moderateScale(24) ,
     marginLeft:moderateScale(4),
     tintColor:colors._F5F5FC,
     
  },
  textStyle:{
  ...commonStyles.fontBold16,
    color:'white'
  }
});

export default styles;
