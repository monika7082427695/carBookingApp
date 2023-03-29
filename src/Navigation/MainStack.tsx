import React from 'react';
import navigationString from '../constants/navigationString';
import * as Screens from '../ui/index';
import TabRoutes from './TabRoutes';

export default function (Stack: any) {
  return (
    <>
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
    </>
  );
}
