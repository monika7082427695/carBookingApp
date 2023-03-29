import React, {useEffect, useState} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import {Image, Keyboard, StyleSheet, View, Alert, Text} from 'react-native';
import * as Screens from '../ui/index';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import navigationStrings from '../constants/navigationString';
import {_navigator} from './navigationServices';
import imagePath from '../constants/imagePath';
const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => {
        return (
          <>
            <BottomTabBar {...tabsProps} />
          </>
        );
      }}
      initialRouteName={navigationStrings.HOMESCREEN}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#F5F5FA',
          borderTopWidth: 0,
          height: moderateScale(84),
        },
      }}>
      <BottomTab.Screen
        name={navigationStrings.SEARCH}
        component={Screens.Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: item => {
            return (
              <View style={styles.conatiner}>
                <Image
                  style={styles.icon}
                  source={
                    item?.focused ? imagePath.HomeScreen : imagePath.HomeScreen5
                  }
                />
                <Text
                  style={
                    item.focused
                      ? styles.textstyleActive
                      : styles.textstyleInactive
                  }>
                  {'Search'}
                </Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.BOOKINGS}
        component={Screens.Bookings}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: item => {
            return (
              <View style={styles.conatiner}>
                <Image
                  style={styles.icon}
                  source={
                    item?.focused
                      ? imagePath.HomeScreen6
                      : imagePath.HomeScreen2
                  }
                />
                <Text
                  style={
                    item.focused
                      ? styles.textstyleActive
                      : styles.textstyleInactive
                  }>
                  {'Bookings'}
                </Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.HELP}
        component={Screens.Help}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: item => {
            return (
              <View style={styles.conatiner}>
                <Image
                  style={styles.icon}
                  source={
                    item?.focused
                      ? imagePath.HomeScreen7
                      : imagePath.HomeScreen3
                  }
                />
                <Text
                  style={
                    item.focused
                      ? styles.textstyleActive
                      : styles.textstyleInactive
                  }>
                  {'Help'}
                </Text>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.PROFILE}
        component={Screens.Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: item => {
            return (
              <View style={styles.conatiner}>
                <Image style={styles.icon} source={imagePath.HomeScreen4} />
                <Text
                  style={
                    item.focused
                      ? styles.textstyleActive
                      : styles.textstyleInactive
                  }>
                  {'Profile'}
                </Text>
              </View>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  activebuttonname: {
    ...commonStyles.fontBold14,
    color: colors.blackShad,
  },
  inactivebuttonname: {
    ...commonStyles.fontBold14,
    color: colors.blackShad,
  },
  linearGradient: {
    height: moderateScale(64),
    position: 'absolute',
    marginHorizontal: moderateScale(24),
    borderRadius: moderateScale(32),
    justifyContent: 'center',
    width: moderateScale(328),
    bottom: moderateScale(16),
    overflow: 'hidden',
  },
  blurStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: moderateScale(32),
  },
  textstyleInactive: {
    ...commonStyles.fontBold14,
    color: colors._8A8A99,
  },
  textstyleActive: {
    ...commonStyles.fontBold14,
    color: colors._050533,
  },
  icon: {
    height: moderateScale(24),
    width: moderateScale(24),
    marginBottom: moderateScale(8),
  },
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabRoutes;
