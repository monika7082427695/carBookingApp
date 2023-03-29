import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import navigationString from '../../constants/navigationString';
import WrapperContainer from '../../../WrapperContainer';

const Home = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'transparent'} translucent />

        <ImageBackground
          style={styles.backgroundimgStyle}
          source={imagePath.OnBoarding4}>
          <View style={styles.viewStyle}>
            <Image style={styles.imgStyle2} source={imagePath.OnBoarding7} />
            <Text style={styles.textStyle}>Explore as Guest</Text>
          </View>
        </ImageBackground>
        <Text style={styles.textStyle2}>Book a memorable Ride</Text>
        <Text
          style={
            styles.subTitleStyle
          }>{`Amet minim molit non deserunt Ullamco\nest sit aliqua dolor do amet sin. velit`}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate(navigationString.LOGIN)}
        style={styles.touchStyle}>
        <Text style={styles.textStyle3}>Continue with Phone Number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
