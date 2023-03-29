import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';

interface prop {
  navigation?: () => void;
  Name?: string;
}

const Button = ({Name, navigation}: prop) => {
  return (
    <View>
      <TouchableOpacity style={styles.touchStyle} onPress={navigation}>
        <Text style={styles.textStyle4}>{Name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  touchStyle: {
    width: moderateScale(343),
    height: moderateScale(48),
    backgroundColor: colors._5C5DFF,
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
   paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(58),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textStyle4: {
    ...commonStyles.fontBold14,
    color: colors._F5F5FC,
    alignSelf: 'center',
  },
});
