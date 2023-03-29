import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import { moderateScale } from '../../styles/responsiveSize';

const LocationScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <View style={styles.viewStyle}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.imgStyle} source={imagePath.location} />

          <Image style={styles.imgStyle2} source={imagePath.location2} />
          <View style={{flex:1}}>
          <View style={styles.viewStyle2}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Pick up"
              placeholderTextColor={'#F2F2FA'}
            />
            <Image style={styles.imgStyle3} source={imagePath.location3} />
          </View>
          <View style={{...styles.viewStyle2,marginTop:12}}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Where to?"
              placeholderTextColor={'#F2F2FA'}
            />
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
      <Text style={styles.searchtextStyle}>Recent Searches</Text>

      <View style={{flexDirection:'row'}}>
        <View>
        <Image
        style={styles.timerimgStyle} source={imagePath.timer}/>
        </View>
        <View  style={styles.viewStyle3 }>
        <Text style={styles.textStyle}>Chandigarh - Manali </Text>
        <Text  style={styles.textStyle2}>15th Feb .2 Passengers</Text>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <View>
        <Image
        style={styles.timerimgStyle} source={imagePath.timer}/>
        </View>
        <View  style={styles.viewStyle3 }>
        <Text style={styles.textStyle}>Solan, Himachal Pradesh </Text>
        <Text  style={styles.textStyle2}>15th Feb </Text>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <View>
        <Image
        style={styles.timerimgStyle} source={imagePath.timer}/>
        </View>
        <View  style={styles.viewStyle3 }>
        <Text style={styles.textStyle}>Solan, Himachal Pradesh </Text>
        <Text  style={styles.textStyle2}>15th Feb </Text>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <View>
        <Image
        style={styles.timerimgStyle} source={imagePath.timer}/>
        </View>
        <View  style={styles.viewStyle3 }>
        <Text style={styles.textStyle}>Chandigarh - Manali </Text>
        <Text  style={styles.textStyle2}>15th Feb .2 Passengers</Text>
        </View>
        </View >
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:24}}>
          <Text style={styles.textStyle3}>View all</Text>
          <Image source={imagePath.downarrow}/>
        </TouchableOpacity>
      
      </ScrollView>
    </View>
  );
};

export default LocationScreen;
