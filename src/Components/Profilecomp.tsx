import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

interface prop {
  Name?: string;
  // source :string;
  image?: ImageSourcePropType;
  iconstyle?: any;
  bk_icon?: ImageSourcePropType;
  editTextStyle?: any;
  imgstyle?: any;
}

const Profilecomp = ({
  image = {},
  Name,
  editTextStyle = {},
  iconstyle = {},
  bk_icon = {},
}: prop) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.img_txt}>
        {image && (
          <TouchableOpacity>
            <Image style={{...styles.iconstyle, ...iconstyle}} source={image} />
          </TouchableOpacity>
        )}

        <View style={{flexDirection: 'row', justifyContent:"space-between", flex:1}}>
          <Text style={{...styles.editTextStyle, ...editTextStyle}}>
            {Name}
          </Text>
          {bk_icon && (
            <TouchableOpacity>
              <Image style={{...styles.imgstyle}} source={bk_icon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profilecomp;

const styles = StyleSheet.create({
  img_txt: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:"space-between"
  },
  iconstyle: {
    marginTop: moderateScale(16),
    marginLeft: moderateScale(16),
    height: moderateScale(48),
    width: moderateScale(48),
  },
  editprofileStyle: {
    marginLeft: moderateScale(16),
  },
  editTextStyle: {
    ...commonStyles.fontBold16,
    color: colors._050533,
    marginLeft: moderateScale(16),
  },
  imgstyle: {
    alignSelf: 'flex-end',
  },
});
