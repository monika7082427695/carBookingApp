import {
  Image,
  Text,
  View,
  StatusBar,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal';
import {showError, showSuccess} from '../../utils/helperFunction';
import navigationString from '../../constants/navigationString';
import Button from '../../Components/Button';
import strings from '../../constants/lang';
import {getCountryNameAsync} from 'react-native-country-picker-modal/lib/CountryService';
import * as Animatable from 'react-native-animatable';
import colors from '../../styles/colors';

const Login = ({navigation}: any) => {
  const [countryCode, setcountryCode] = useState('IN');
 const [callingCode, setcallingCode] = useState('91');
 const [visible, setVisible] = useState(false);
  const [inputValue, setinputValue] = useState('');
  const [inputValue2, setinputValue2] = useState('');

  const [code, setcode] = useState(30);
  const [codestart, setcodestart] = useState(true);
  const [show, setshow] = useState();
  useEffect(() => {
    fun();
  }, [code]);
  const fun = () => {
    const timer = setTimeout(() => {
      if (code > 0) {
        setcode(code - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  };

  const toggleDropdown = () => {
    setVisible(true);
  };

  const handleInputChange = text => {
    setinputValue(text);
  };
  const handleInputChange2 = (text2: string) => {
    setinputValue2(text2);
  };

  const handleupdate = () => {
    if (inputValue.trim().length == 0) {
      showError('this field is required');
    } else if (inputValue2.trim().length == 0) {
      showError('this field is required');
    } else {
      // saveUserData({access_token:"test"})
      navigation.navigate(navigationString.TABROUTES);
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent />

      <ScrollView style={{flex: 1}}>
        <ImageBackground style={styles.imgStyle} source={imagePath.OnBoarding5}>
          <Image style={styles.backimg} source={imagePath.location} />
        </ImageBackground>

        <Text style={styles.textStyle}>Enter Phone Number</Text>
        <Text
          style={
            styles.textStyle2
          }>{`We will send you 4-Digit code to\nverify that its actually you.`}</Text>
        <View style={{flex: 1}}>
          <View style={styles.viewStyle}>
            <CountryPicker
              withFilter
              visible={visible}
              onClose={() => {
                setVisible(false);
              }}
              countryCode={countryCode}
              withFlagButton={true}
              withCallingCode={callingCode}
              excludeCountries={['AQ', 'BV', 'TF', 'HM', 'UM']}
              onSelect={country => {
                const {cca2, callingCode} = country;
                setcountryCode(cca2);
                setcallingCode(country?.callingCode);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                toggleDropdown();
              }}>
              <Image style={styles.imgStyle2} source={imagePath.login} />
            </TouchableOpacity>
            <View style={styles.viewStyle2} />
            <Text style={styles.texStyle3}>{'+' + callingCode + '-'}</Text>
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              onChangeText={val => handleInputChange(val)}
              style={styles.inputStyle}
            />
          </View>
        </View>
        {/* {
          show && 
        } */}
        <Animatable.View animation={'slideInUp'}>
          <View style={styles.viewStyle}>
            <TextInput
              placeholder="Enter 4-digit OTP"
              keyboardType="numeric"
              maxLength={4}
              onChangeText={val => handleInputChange2(val)}
              style={styles.inputStyle}
              placeholderTextColor={colors._626273}
            />
          </View>
          {code == 0 ? (
            ''
          ) : (
            <View style={styles.viewStyle4}>
              <Text style={styles.textStyle8}>Resend again in </Text>
              <Text style={styles.textStyle6}>
                00:{code > 9 ? code : '0' + code}
              </Text>
            </View>
          )}
          <View>
            {code === 0 ? (
              <TouchableOpacity onPress={() => setcode(30)}>
                <Text style={styles.textStyle7}>Resend again</Text>
              </TouchableOpacity>
            ) : (
              ''
            )}
          </View>
        </Animatable.View>
      </ScrollView>
     <TouchableOpacity onPress={handleupdate} style={styles.touchStyle}>
          <Text style={styles.textStyle4}>Next</Text>
        </TouchableOpacity>
 </View>
  );
};

export default Login;
