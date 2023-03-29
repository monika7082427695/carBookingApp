import React from 'react';
import {StatusBar, StatusBarStyle, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Loader from './src/Components/Loader';

// import Loader from './Loader';
import colors from './src/styles/colors';

interface WrapperProps {
  children: JSX.Element;
  isLoading?: boolean;
  statusBarColor?: string;
  bodyColor?: string;
  barStyle?: StatusBarStyle;
  removeTopInset?: boolean;
  removeBottomInset?: boolean;
}
const WrapperContainer = ({
  children,
  statusBarColor = colors.theme,
  bodyColor = colors.white,
  barStyle = 'light-content',
  removeTopInset = false,
  removeBottomInset = false,
  isLoading = false,
}: WrapperProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bodyColor,
        paddingTop: removeTopInset ? 0 : insets.top,
        paddingBottom: removeBottomInset ? 0 : insets.bottom,
      }}>
      <StatusBar
        backgroundColor={statusBarColor}
        translucent
        barStyle={barStyle}
      />
      <View style={{backgroundColor: bodyColor, flex: 1}}>{children}</View>
      <Loader isLoading={isLoading} />
    </View>
  );
};

export default WrapperContainer;
