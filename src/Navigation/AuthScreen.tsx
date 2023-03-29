import React from 'react';
import * as Screens from '../ui/index';
import navigationString from '../constants/navigationString';
import TabRoutes from './TabRoutes';

export default function (Stack: any, isFirstTime: boolean) {
  return (
    <>
      {!isFirstTime && (
        <Stack.Screen
          name={navigationString.SEARCH}
          component={Screens.OnBoarding}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name={navigationString.HOME}
        component={Screens.Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.LOGIN}
        component={Screens.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.OTPVERIFICATION}
        component={Screens.OtpVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.TABROUTES}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationString.LOCATIONSCREEN}
        component={Screens.LocationScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={navigationString.RIDELIST}
        component={Screens.Ridelist}
        options={{headerShown: false}}
      />
    </>
  );
}
